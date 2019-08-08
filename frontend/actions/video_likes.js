import * as LikeUtil from '../util/likes/util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";


const receiveLike = (like) => {
    return{
        type: RECEIVE_LIKE,
        like: like
    }
}

const removeLike = () => {
    return {
        type: REMOVE_LIKE,
    }
}


export const createVideoLike = (value, video_id) => dispatch => {
    return LikeUtil.createVideoLike(value, video_id).then(like => dispatch(receiveLike(like)))
}

export const updateVideoLike = (id, value, video_id) => dispatch => {
    return LikeUtil.updateVideoLike(id, value, video_id).then(like => dispatch(receiveLike(like)))
}

export const deleteVideoLike = (id, video_id) => dispatch => {
    return LikeUtil.deleteVideoLike(id, video_id).then(() => dispatch(removeLike()))
}
