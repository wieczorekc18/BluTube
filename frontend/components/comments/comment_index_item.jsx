import React from 'react'


const CommentIndexItem = (props) => {
    let author
    props.comment.author ? author = props.comment.author : author = {username: "asd"}
    return(
        <div className="single-comment">
            <img className="comment-user-icon" src={window.userIcon2} />
            <div className="comment-author">{author.username}</div>
            <div className="comment-body">{props.comment.body}</div>
        </div>
    )
}

export default CommentIndexItem;