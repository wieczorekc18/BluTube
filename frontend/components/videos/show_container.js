import { connect } from 'react-redux'
import VideoShow from './show'
import { getVideo } from '../../actions/videos'

const msp = (state, ownProps) => {
    let videoId = ownProps.match.params.videoId
    let video = state.videos[videoId]
    return {
        video: video
    }
}

const mdp = dispatch => {
    return{
        getVideo: id => dispatch(getVideo(id)),
    }
}



export default connect(msp, mdp)(VideoShow)
