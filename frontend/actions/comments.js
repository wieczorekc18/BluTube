import * as CommentUtil from '../util/comments/util'

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS"

const receiveAllComments = (comments) => {
    return{
        type: RECEIVE_ALL_COMMENTS,
        comments: comments
    }
}

const receiveComment = (comment) => {
    return{
        type: RECEIVE_COMMENT,
        comment: comment
    }
}

export const clearComments = () => {
    return {
        type: CLEAR_COMMENTS,
    }
}


export const getComments = (videoId) => dispatch => {
    return CommentUtil.getComments(videoId)
        .then(comments => {
            return dispatch(receiveAllComments(comments))
        })
}

export const createComment = (body, videoId, parentCommentId) => dispatch => {
    return CommentUtil.createComment(body, videoId, parentCommentId)
        .then(comment => {
            // debugger
            return dispatch(receiveComment(comment))
        })
}