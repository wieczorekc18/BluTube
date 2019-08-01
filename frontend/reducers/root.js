import { combineReducers } from 'redux'

import ErrorsReducer from './auth_errors'
import SessionReducer from './session'

const RootReducer = combineReducers({
    errors: ErrorsReducer,
    session: SessionReducer,
})

export default RootReducer;

// entities
// ui
// session  
// errors 