import { RECEIVE_CURRENT_USER, CHECK_EMAIL, RECEIVE_ERRORS } from "../actions/auth"

const ErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ERRORS:
            return (action.errors)
        case CHECK_EMAIL:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default ErrorsReducer;