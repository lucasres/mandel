import { createStore } from "redux";

const INITIAL_STATE = {
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
            return {...state,current_type:action.value}; 
        case 'CHANGE_COMMAND':
            newState[state.current_type].command = action.value;
            return newState;
        case 'CHANGE_PROJECT_PATH':
            newState[state.current_type].project_path = action.value;
            return newState;
        case 'CHANGE_CODE':
            newState.code = action.value;
            return newState;
        default:
            return state;
    }
}

const store = new createStore(configs);

export default store;