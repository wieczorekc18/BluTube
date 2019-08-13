import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, CLEAR_COMMENTS } from '../actions/comments';
import merge from 'lodash/merge';


const CommentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_ALL_COMMENTS:
            const newState = {};
            let allComments = Object.values(action.comments)
            allComments.forEach(comment => {
                newState[comment.extract.id] = comment.extract
            })
            return merge({}, oldState, newState)
        case CLEAR_COMMENTS:
            return [];
        case RECEIVE_COMMENT:
            return merge({}, oldState, { [action.comment.id]: action.comment})
        default:
            return oldState;
    }
}

export default CommentsReducer;