import { createStore } from "redux";

const INITIAL_STATE = {
    current_type: 'laravel',
    avaliable_types:['laravel',],
    laravel: {
        // command:'docker exec -i cev-flow-php-fpm php artisan tinker < {file_path}',
        command:'cat {file_path} | php {project_path}/artisan tinker',
        project_path: '/home/lucas/source/cev_flow/application',
    }
    //TODO: add outher frameworks
}

function configs(state=INITIAL_STATE,action){
    let newState = state;
    switch(action.type){
        case 'CHANGE_TYPE':
            return {...state,current_type:action.value}; 
        case 'CHANGE_COMMAND':
            newState[state.current_type].command = action.value
            return newState;
        case 'CHANGE_PROJECT_PATH':
            newState[state.current_type].project_path = action.value
            return newState;
        default:
            return state;
    }
}

const store = new createStore(configs);

export default store;