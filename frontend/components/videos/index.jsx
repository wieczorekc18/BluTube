import React from 'react'
import { VideoIndexItem } from './index_item'


class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            marg: "22%",
        }
        this.setFull = this.setFull.bind(this)
        this.setPart = this.setPart.bind(this)
    }

    setFull() {
        this.setState({ marg: "22%" })
    }

    setPart() {
        this.setState({ marg: "8%" })
    }

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
        $(".fa-bars").off().on("click", () => {
            if (this.state.marg === "22%") {
                this.setPart()
            } else {
                this.setFull()
            }
        })
        let marg = { marginLeft: this.state.marg }

        return(
            <div className="videos-index" style={marg}>
                <h3 className="recommended-header">Recommended</h3>
                <ul className="video-index-ul">
                    {videos}
                </ul>
            </div>
        )
    }
}

export default VideoIndex
