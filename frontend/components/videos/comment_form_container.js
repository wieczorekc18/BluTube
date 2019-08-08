import { connect } from 'react-redux';
import CommentForm from './comment_form';

const msp = (ownProps) => {
    let videoId = ownProps.match.params.videoId
    return{
        comment: { body: "", videoId: videoId, parent_comment_id: null}
    }
}

const mdp = dispatch => {

}

export default connect(msp, mdp)(CommentForm)