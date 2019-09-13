import React from 'react'
import { VideoIndexItem } from './index_item'
import CommentIndex from '../comments/comment_index'
import { Redirect } from 'react-router';


class VideoShow extends React.Component {

    constructor(props){
        super(props)
        this.formatDate = this.formatDate.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }

    handleLike(e){
        e.preventDefault()
        let liked = false 
        let disliked = false
        let videoId = this.props.match.params.videoId;
        let myLike
        if(this.props.currentUser){
            this.props.likes.forEach(like => {
                if(like.user_id === this.props.currentUser.id){
                    if(like.value === -1){
                        disliked = true
                        myLike = like
                    } else {
                        liked = true
                        myLike = like
                    }
                }
            })
            if(liked){
                this.props.deleteVideoLike(myLike.id, videoId)
            }else if(disliked){
                this.props.updateVideoLike(myLike.id, videoId)
            }else{
                this.props.createVideoLike(1, videoId)
            }
        }else{
            <Redirect to="/login"/>
        }
    }

    handleDislike(e){
        e.preventDefault()
        let liked = false
        let disliked = false
        let videoId = this.props.match.params.videoId;
        let myLike
        if (this.props.currentUser) {
            this.props.likes.forEach(like => {
                if (like.user_id === this.props.currentUser.id) {
                    if (like.value === -1) {
                        disliked = true
                        myLike = like
                    } else {
                        liked = true
                        myLike = like
                    }
                }
            })
            if (liked) {
                this.props.updateVideoLike(myLike.id, videoId)
            } else if (disliked) {
                this.props.deleteVideoLike(myLike.id, videoId)
            } else {
                this.props.createVideoLike(-1, videoId)
            }
        }else{
            <Redirect to="/login" />
        }
    }

    componentDidUpdate(prevProps){
        let preVid
        let vid 
        prevProps.video ? preVid = prevProps.video : preVid = {id: -1}
        this.props.video ? vid = this.props.video : vid = {id: -1}
        if(preVid.id !== vid.id){
            let videoId = this.props.match.params.videoId;
            this.props.clearLikes();
            this.props.getVideoLikes(videoId);
            this.props.getVideo(videoId);
        }
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
        this.props.clearLikes();
        this.props.getVideoLikes(videoId);
        this.props.getVideo(videoId);
    }

    render(){
        let allVideos = this.props.videos.map(video => {
            return (<VideoIndexItem
                key={`${video.id}`}
                video={video}
            />)
        })
        let video;
        this.props.video ? video = this.props.video : video = {id: 0, title: "", description: "", views: "", uploader: {username: "d"}}
            
        let videos = allVideos.filter((vid) => {
            return vid.key != video.id
        })
        let likes
        let dislikes
        let likeClass = "no-color"
        let dislikeClass = "no-color"
        let likeStyle
        let dislikeStyle
        let totalLikes
        this.props.likes ? totalLikes = this.props.likes : totalLikes = []
        if(totalLikes.length === 0){
            likeStyle = 50
            dislikeStyle = 50
            likes = 0
            dislikes = 0
        }else{
            let totalValue = 0
            totalLikes.forEach(like => {
                totalValue += like.value
                if (like.user_id === this.props.currentUser.id) {
                    if (like.value === -1) {
                        likeClass = "no-color"
                        dislikeClass = "color"
                    } else {
                        dislikeClass = "no-color"
                        likeClass = "color"
                    }
                }else{
                    likeClass = "no-color"
                    dislikeClass = "no-color"
                }
            })
            if(totalValue > 0){
                dislikes = (totalLikes.length - totalValue)/2
                likes = totalLikes.length - dislikes
            }else{
                dislikes = (totalLikes.length - totalValue) / 2
                likes = totalLikes.length - dislikes
            }
            likeStyle = (likes/(likes+dislikes))*100
            dislikeStyle = (dislikes / (likes + dislikes)) * 100
        }
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
                                        <div className="fullbar">
                                            <div className="likebar">
                                                <p className={likeClass}>
                                                    <i className="fas fa-thumbs-up" onClick={this.handleLike}>
                                                        <span className="num-likes">{likes}</span>
                                                    </i>
                                                </p>
                                            </div>
                                            <div className="dislikebar">
                                                <p className={dislikeClass}>
                                                    <i className="fas fa-thumbs-down" onClick={this.handleDislike}>
                                                        <span className="num-dislikes">{dislikes}</span>
                                                    </i> 
                                                </p>
                                            </div>
                                        </div>
                                        <div className="like-borders">
                                            <div className="like-border" style={{ width: `${likeStyle}%`}}>
                                            
                                            </div>
                                            <div className="dislike-border" style={{width: `${dislikeStyle}%`}}>

                                            </div>
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
                    {/* <div className="comment-heading">
                        {comments.length} Comments
                    </div> */}
                    <CommentIndex/>
                    {/* <CommentForm/>
                    <ul className="comment-ul">
                        {commentDisplay}
                    </ul> */}
                </div>
                <ul className="video-show-index">
                    <h3 className="up-next">Up Next</h3>
                    {videos}
                </ul>
            </div>
        )
    }
}

//componentdidmount for index



export default VideoShow;