import { RECEIVE_VIDEO_LIKES, RECEIVE_VIDEO_LIKE, REMOVE_VIDEO_LIKE, CLEAR_LIKES } from "../actions/video_likes"
import merge from 'lodash/merge'

const LikesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState
    switch(action.type){
        case RECEIVE_VIDEO_LIKES:
            debugger
            newState = {}
            let videoLikes = Object.values(action.videoLikes)
            videoLikes.forEach(like => {
                newState[like.extract.id] = like.extract
            })
            return merge({}, oldState, newState)
        case RECEIVE_VIDEO_LIKE:
            debugger
            return merge({}, oldState, { [action.videoLike.id]: action.videoLike })
        case REMOVE_VIDEO_LIKE:
            newState = merge({}, oldState);
            delete newState[action.videoLike.id];
            return newState;
        case CLEAR_LIKES:
            return [];
        default:
            return oldState
    }
}

export default LikesReducer