import React from 'react'
import CommentIndexItem from './comment_index_item'
import VideoIndexItem from './index_item'
import CommentForm from './comment_form'




class VideoShow extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            refresh: Math.random(0, 50),
        }
        this.formatDate = this.formatDate.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    refresh(){
        // debugger
        this.setState({
            refresh: Math.random(0, 50),
        })
        return -1
    }


    formatDate(ts="2018-18-18-18"){
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let month = ts.substr(5, 2)
        let year = ts.substr(0, 4)
        month = months[month-1]
        let day = ts.substr(8, 2)
        day[0] === "0" ? day = day[1] : day;
        return "Published on " + month + " " + day + ", " + year; 
    }

    componentDidMount(){
        this.props.getVideos();
        let videoId = this.props.match.params.videoId;
        this.props.getVideo(videoId);
    }

    render(){
        debugger
        let allVideos = this.props.videos.map(video => {
            return (<VideoIndexItem
                key={`${video.id}`}
                video={video}
            />)
        })
        let video;
        this.props.video ? video = this.props.video : video = {id: 0, title: "", description: "", views: "", uploader: {username: "d"}}
        let comments = [];
        video.comments ? comments = Object.values(video.comments) : comments = [];
        let commentDisplay = comments.map(c => {
            return(
                <CommentIndexItem
                key={`${c.id}`}
                comment={c}
                refresh={this.refresh}
                />
                )
            })
            
        let videos = allVideos.filter((vid) => {
            debugger
            return vid.key != video.id
        })
        let likes
        video.videoLikes ? likes = video.videoLikes : likes = 0
        let dislikes
        video.videoDislikes ? dislikes = video.videoDislikes : dislikes = 0
        let uploadDate = this.formatDate(video.created_at)
        return(
            <div className="video-show-page">
                <div className="video-show-section">
                    <div className="video-player">
                        <video className="actual-video" src={video.vid} controls></video>
                        {/* <div className="video-placeholder"><img src={window.bellyflopthumb} alt="" /></div> */}
                    </div>
                    <div className="info-section">
                        <div className="section-one">
                            <div className="section-one-left">
                                <div className="video-show-title">{video.title}</div>
                                <div className="section-one-bottom-half">
                                    <div className="video-show-view-counter">{video.views} Views</div>
                                    <div className="section-one-right">
                                        <div className="likebar">
                                            <i className="fas fa-thumbs-up"><span className="num-likes">{likes}</span></i><i className="fas fa-thumbs-down"><span className="num-dislikes">{dislikes}</span></i> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="horiz-line"/>
                    
                        <div className="uploader-details-section">
                            <div className="video-show-uploader-icon">{video.uploader.username[0].toUpperCase()}</div >
                            <div className="video-show-uploader">{video.uploader.username}</div >
                            {/* <span className="video-show-sub-button">Subscribe</span> */}
                            <div className="video-show-upload-date">{uploadDate}</div>
                        </div>
                        <div className="video-show-description">{ video.description }</div >
                        <hr className="horiz-line" />
                    </div>
                    <br/>
                    <div className="comment-heading">
                        {comments.length} Comments
                    </div>
                    <CommentForm refresh={this.refresh}/>
                    <ul className="comment-ul">
                        {commentDisplay}
                    </ul>
                </div>
                <ul className="video-show-index">
                    <h3 className="up-next">Up Next</h3>
                    {videos}
                </ul>
            </div>
        )
    }
}


export default VideoShow;