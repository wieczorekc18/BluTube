import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO } from "../actions/videos"
import merge from "lodash/merge"


const VideosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_ALL_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            return merge({}, oldState, { [action.video.id]: action.video });
        default:
            return oldState;
    }
}

export default VideosReducer