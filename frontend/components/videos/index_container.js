import { connect } from 'react-redux';
import VideoIndex from './index'
import { getVideos } from '../../actions/videos'


const msp = state => {
    debugger
    let videos = Object.values(state.videos)
    return {
        videos: videos
    }
}

const mdp = dispatch => {
    return {
        getVideos: () => dispatch(getVideos()),
    }
}

export default connect(msp, mdp)(VideoIndex)