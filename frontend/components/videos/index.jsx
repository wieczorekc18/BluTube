import React from 'react'
import VideoIndexItem from './index_item'


class VideoIndex extends React.Component {

    componentDidMount(){
        this.props.getVideos();
    }

    render(){
        let videos = this.props.videos.map(video => {
            return(<VideoIndexItem
                key={`${video.id}`}
                video={video}
            />)
        })

        return(
            <div className="videos-index">
                <h3 className="recommended header">Recommended</h3>
                <ul className="video-index-ul">
                    {videos}
                </ul>
            </div>
        )
    }
}

export default VideoIndex
