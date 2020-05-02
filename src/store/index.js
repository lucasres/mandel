import { createStore } from "redux";
const electron_store = window.require('electron-store');
const local_store = new electron_store;

const INITIAL_STATE_FROM_LOCAL = local_store.get('states');

const INITIAL_STATE = INITIAL_STATE_FROM_LOCAL ? INITIAL_STATE_FROM_LOCAL : {
    current_type: 'django',
    avaliable_types:['laravel','django'],
    code:'',
    laravel: {
        command:'cat {file_path} | php {project_path}/artisan tinker',
        project_path: '',
    },
    django:{
        command:'python3 {project_path}/manage.py shell < {file_path}',
        project_path:'',
    }
    //TODO: add outher frameworks
}

function configs(state=INITIAL_STATE,action){
    let newState = state;
    switch(action.type){
        case 'CHANGE_TYPE':
            newState.current_type = action.value;
            break;
        case 'CHANGE_COMMAND':
            newState[state.current_type].command = action.value;
            break;
        case 'CHANGE_PROJECT_PATH':
            newState[state.current_type].project_path = action.value;
            break;
        case 'CHANGE_CODE':
            newState.code = action.value;
            break;
    }
    if(action.save){
        local_store.set('states',newState);
    }
    return newState;
}

const store = new createStore(configs);

export default store;