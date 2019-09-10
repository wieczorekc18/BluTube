import { connect } from 'react-redux'
import VideoShow from './show'
import { getVideo, getVideos } from '../../actions/videos'
import {getVideoLikes, updateVideoLike, createVideoLike, deleteVideoLike, clearLikes} from '../../actions/video_likes'

const msp = (state, ownProps) => {
    // debugger
    let allVideos = Object.values(state.videos)
    let videoId = ownProps.match.params.videoId
    let video = state.videos[videoId]
    let videos = allVideos.filter((vid) => {
        return vid.id != videoId
    })
    let likes = Object.values(state.likes)
    debugger
    return {
        video: video,
        videos: videos,
        currentUser: state.session.currentUser, //important
        likes: likes,
    }

}


const mdp = dispatch => {
    return{
        getVideo: id => dispatch(getVideo(id)),
        getVideos: () => dispatch(getVideos()),
        getVideoLikes: (videoId) => dispatch(getVideoLikes(videoId)),
        updateVideoLike: (id, videoId) => dispatch(updateVideoLike(id, videoId)),
        createVideoLike: (id, value, videoId) => dispatch(createVideoLike(id, value, videoId)),
        deleteVideoLike: (id, videoId) => dispatch(deleteVideoLike(id, videoId)),
        clearLikes: () => dispatch(clearLikes()),
    }
}



export default connect(msp, mdp)(VideoShow)
