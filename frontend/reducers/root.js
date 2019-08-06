import { combineReducers } from 'redux';

import ErrorsReducer from './auth_errors';
import SessionReducer from './session';
import VideosReducer from "./videos";

const RootReducer = combineReducers({
    errors: ErrorsReducer,
    session: SessionReducer,
    videos: VideosReducer,
})

export default RootReducer;

// entities
// ui
// session  
// errors 