import { RECEIVE_CURRENT_USER, CHECK_EMAIL, LOGOUT_CURRENT_USER } from "../actions/auth"

const _nullUser = Object.freeze({
    id: null
});

const LoginReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type){
        case CHECK_EMAIL:
            return Object.assign({}, {email: action.email})
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return _nullUser
        default:
            return state;
    }
}

export default LoginReducer;