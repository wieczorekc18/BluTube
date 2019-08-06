import React from 'react'
import CommentIndexItem from './comment_index_item'

class VideoShow extends React.Component {

    constructor(props){
        super(props)
        this.formatDate = this.formatDate.bind(this)
    }

    formatDate(ts="adfuahpsidufanf"){
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let month = ts.substr(5, 2)
        let year = ts.substr(0, 4)
        month = months[month-1]
        let day = ts.substr(8, 2)
        day[0] === "0" ? day = day[1] : day;
        return "Published on " + month + " " + day + ", " + year; 
    }

    componentDidMount(){
        let videoId = this.props.match.params.videoId;
        this.props.getVideo(videoId);
    }

    render(){
        let video;
        this.props.video ? video = this.props.video : video = {title: "", description: "", views: "", uploader: {username: "d"}}
        let comments = [];
        video.comments ? comments = Object.values(video.comments) : comments = [];
        let commentDisplay = comments.map(c => {
            return(
                <CommentIndexItem
                    key={`${c.id}`}
                    comment={c}
                />
            )
        })
        let uploadDate = this.formatDate(video.created_at)
        return(
            <div className="video-show-section">
                <div className="video-player">
                    <video width="670" height="375" src={video.vid} controls></video>
                    {/* <div className="video-placeholder"><img src={window.bellyflopthumb} alt="" /></div> */}
                </div>
                <div className="video-show-title">{video.title}</div>
                <div className="video-show-view-counter">{video.views} Views</div>
                <div className="uploader-details-section">
                    <div className="video-show-uploader-icon">{video.uploader.username[0].toUpperCase()}</div >
                    <div className="video-show-uploader">{video.uploader.username}</div >
                    <span className="video-show-sub-button">Subscribe</span>
                    <div className="video-show-upload-date">{uploadDate}</div>
                </div>
                <div className="video-show-description">{ video.description }</div >
                <ul className="comment-ul">
                    {commentDisplay}
                </ul>
            </div>
        )
    }
}


export default VideoShow;