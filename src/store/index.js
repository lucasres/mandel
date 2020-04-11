import { createStore } from "redux";

const INITIAL_STATE = {
    current_type: 'laravel',
    avaliable_types:['laravel','django'],
    laravel: {
        command:'docker exec -i cev-flow-php-fpm php artisan tinker < {file_path}',
        project_path: '',
    }
    //TODO: add outher frameworks
}

function configs(state=INITIAL_STATE,action){
    switch(action.type){
        case 'CHANGE_TYPE':
            return {...state,current_type:action.value}; 
        case 'CHANGE_COMMAND':
            let newState = state;
            newState[state.current_type].command = action.value
            console.log(newState);
            return newState;
        default:
            return state;
    }
}

const store = new createStore(configs);

export default store;