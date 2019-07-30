import * as AuthUtil from "../util/auth"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"

const receiveCurrentUser = (user) => {
    return{
        type: RECEIVE_CURRENT_USER,
        user: user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const login = (user) => dispatch => {
    return AuthUtil.postSession(user).then(user => dispatch(receiveCurrentUser(user)))
}

export const signup = (user) => dispatch => {
    return AuthUtil.postUser(user).then(user => dispatch(receiveCurrentUser(user)))
}

export const logout = () => dispatch => {
    return AuthUtil.deleteUser().then(() => dispatch(logoutCurrentUser()))
}
