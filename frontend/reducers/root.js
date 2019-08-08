import { combineReducers } from 'redux';

import ErrorsReducer from './auth_errors';
import SessionReducer from './session';
import VideosReducer from "./videos";
import CommentsReducer from './comments'

const RootReducer = combineReducers({
    errors: ErrorsReducer,
    session: SessionReducer,
    videos: VideosReducer,
    comments: CommentsReducer,
})

export default RootReducer;

// entities
// ui
// session  
// errors 