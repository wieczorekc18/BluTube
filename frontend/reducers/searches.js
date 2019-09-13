import { GET_SEARCH_RESULTS } from "../actions/videos"
import merge from "lodash/merge"


const SearchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState
    switch (action.type) {
        case GET_SEARCH_RESULTS:
            newState = {};
            let searchedVids = Object.values(action.searchedVideos)
            searchedVids.forEach(video => {
                newState[video.id] = video
            })
            debugger
            return merge({}, newState)
        default:
            return oldState;
    }
}

export default SearchReducer