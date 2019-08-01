
import * as AuthUtil from "../util/auth/auth_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const CHECK_EMAIL = "CHECK_EMAIL"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveCurrentUser = (user) => {
    
    return{
        type: RECEIVE_CURRENT_USER,
        user: user
    }
}

const verifyEmail = (email) => {
    
    return{
        type: CHECK_EMAIL,
        email: email
    }
}

const logoutCurrentUser = () => {
    
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors) => {
    return{
        type: RECEIVE_ERRORS,
        errors: errors
    }
}

export const signup = (user) => dispatch => (
    AuthUtil.postUser(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ))
);

export const checkEmail = (email) => dispatch => {

    return(
        AuthUtil.checkEmail(email).then(email => (
            dispatch(verifyEmail(email))
        ), error => (
            dispatch(receiveErrors(error.responseJSON))
        ))
    )
}

export const login = (user) => dispatch => (
    AuthUtil.postSession(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ))
);


// export const login = (user) => dispatch => (
//     AuthUtil.postSession(user).then(user => (
//         dispatch(receiveCurrentUser(user))
//     ), error => (
//         dispatch(receiveErrors(error.responseJSON))
//     ))
// );

export const logout = () => dispatch => {
    
    return AuthUtil.deleteSession().then(() => (
        dispatch(logoutCurrentUser())
    ))
};
