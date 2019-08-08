import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comments'

const msp = (state, ownProps) => {
    let videoId = ownProps.match.params.videoId
    return{
        comment: { body: "", videoId: videoId, parent_comment_id: null}
    }
}

const mdp = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment.body, comment.videoId, comment.parentCommentId))
    }
}

export default connect(msp, mdp)(CommentForm)