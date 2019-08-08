import { RECEIVE_COMMENT } from '../actions/comments';
import merge from 'lodash/merge';


const CommentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_COMMENT:
            return merge({}, oldState, { [action.comment.id]: action.comment})
        default:
            return oldState;
    }
}

export default CommentsReducer;