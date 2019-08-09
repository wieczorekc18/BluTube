import * as CommentUtil from '../util/comments/util'

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComment = (comment) => {
    return{
        comment: comment
    }
}

export const createComment = (body, videoId, parentCommentId) => dispatch => {
    return CommentUtil.createComment(body, videoId, parentCommentId)
        .then(comment => {
            debugger
            return dispatch(receiveComment(comment))
        })
}