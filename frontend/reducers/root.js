import { combineReducers } from 'redux'

import ErrorsReducer from './auth_errors'
import LoginReducer from './login'
import SignupReducer from './signup'

const RootReducer = combineReducers({
    errors: ErrorsReducer,
    login: LoginReducer,
    signup: SignupReducer,
})

export default RootReducer;