import * as LikeUtil from '../util/likes/util';

export const RECEIVE_VIDEO_LIKES = "RECEIVE_VIDEO_LIKES"
export const RECEIVE_VIDEO_LIKE = "RECEIVE_VIDEO_LIKE";
export const REMOVE_VIDEO_LIKE = "REMOVE_VIDEO_LIKE";
export const CLEAR_LIKES = "CLEAR_LIKES"


const receiveVideoLikes = (videoLikes) => {
    return {
        type: RECEIVE_VIDEO_LIKES,
        videoLikes: videoLikes
    }
}

const receiveVideoLike = (videoLike) => {
    return{
        type: RECEIVE_VIDEO_LIKE,
        videoLike: videoLike
    }
}

const removeVideoLike = (id) => {
    return {
        type: REMOVE_VIDEO_LIKE,
        id: id,
    }
}

export const clearLikes = () => {
    return {
        type: CLEAR_LIKES,
    }
}

export const getVideoLikes = (video_id) => dispatch => {
    return LikeUtil.getVideoLikes(video_id).then(videoLikes => dispatch(receiveVideoLikes(videoLikes)))
}

export const createVideoLike = (value, video_id) => dispatch => {
    return LikeUtil.createVideoLike(value, video_id).then(like => dispatch(receiveVideoLike(like)))
}

export const updateVideoLike = (id, video_id) => dispatch => {
    return LikeUtil.updateVideoLike(id, video_id).then(like => dispatch(receiveVideoLike(like)))
}

export const deleteVideoLike = (id, video_id) => dispatch => {
    return LikeUtil.deleteVideoLike(id, video_id).then(id => dispatch(removeVideoLike(id)))
}
