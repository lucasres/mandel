import { createStore } from "redux";

const INITIAL_STATE = {command:'docker exec -i cev-flow-php-fpm php artisan tinker < {file_path}'}

function configs(state=INITIAL_STATE,action){
    switch(action){
        case 'ADD_CONFIG_PATH':
            return {...state,path:state};
        case 'ADD_CONFIG_COMMAD':
                return {...state,command:state};
        default:
            return state;
    }
}

const store = new createStore(configs);

export default store;