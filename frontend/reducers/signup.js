import { RECEIVE_CURRENT_USER } from "../actions/auth"
import merge from 'lodash/merge'

const SignupReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { currentUser: action.currentUser })
        default:
            return state;
    }
}

export default SignupReducer;