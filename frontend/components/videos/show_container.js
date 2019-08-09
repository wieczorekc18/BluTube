import { connect } from 'react-redux'
import VideoShow from './show'
import { getVideo, getVideos } from '../../actions/videos'

const msp = (state, ownProps) => {
    let allVideos = Object.values(state.videos)
    let videoId = ownProps.match.params.videoId
    let video = state.videos[videoId]
    let videos = allVideos.filter((video) => {
        return video.id != videoId
    })
    return {
        video: video,
        videos: videos,
    }

}

const mdp = dispatch => {
    return{
        getVideo: id => dispatch(getVideo(id)),
        getVideos: () => dispatch(getVideos()),
    }
}



export default connect(msp, mdp)(VideoShow)
