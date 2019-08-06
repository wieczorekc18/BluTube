import { connect } from 'react-redux'
import { postVideo } from '../../actions/videos'
import UploadVideo from './upload'




const mdp = (dispatch) => {
    return{
        postVideo: formData => dispatch(postVideo(formData))
    }
}

export default connect(null, mdp)(UploadVideo)