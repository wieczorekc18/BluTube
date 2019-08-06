import React from 'react';
import { Link } from 'react-router-dom';


function formatDate(ts = "naiufanweifuqnwpeifunqwpefiun"){
    let uploadYear = ts.substr(0, 4);
    let uploadMonth = ts.substr(5, 2);
    let uploadDay = ts.substr(8, 2);
    let uploadHour = ts.substr(11, 2);
    let uploadMinute = ts.substr(14, 2);
    let uploadSecond = ts.substr(17, 2);
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();
    let yearDiff = year - uploadYear;
    let monthDiff = month - uploadMonth;
    let dayDiff = day - uploadDay;
    let secondDiff = second - uploadSecond;
    let minuteDiff = minute - uploadMinute;
    let hourDiff = hour - uploadHour;
    if(yearDiff > 0){
        return yearDiff === 1 ? yearDiff + ' year ago' : yearDiff + ' years ago';
    }else if(monthDiff > 0){
        return monthDiff === 1 ? monthDiff + ' month ago' : monthDiff + ' months ago';
    }else if(dayDiff > 0){
        return dayDiff === 1 ? dayDiff + ' day ago' : dayDiff + ' days ago';
    } else if (hourDiff > 0) {
        return hourDiff === 1 ? hourDiff + ' hour ago' : hourDiff + ' hours ago'; 
    } else if (minuteDiff > 0) {
        return minuteDiff === 1 ? minuteDiff + ' minute ago' : minuteDiff + ' minutes ago';
    } else {
        return secondDiff <= 1 ? '1 second ago' : secondDiff + ' seconds ago';
    }
}


const VideoIndexItem = props => {
    let uploadedAt = formatDate(props.video.created_at)
    let uploader;
    props.video.uploader ? uploader = props.video.uploader : uploader = {username: ""}
    return(
        <div className="video-index-item">
            <Link to={`/videos/${props.video.id}`}>
                <img className="video-index-item-thumb" src={props.video.thumb} alt="thumb here"/>
                {/* <img className="video-index-item-thumb" src={window.bellyflopthumb} alt="thumb here" /> */}
                <div className="video-index-item-text">
                    <div className="video-labels">
                        <span className="index-video-title">{props.video.title}</span>
                        <br/>
                        {uploader.username}
                        <br/>
                        {props.video.views} views • {uploadedAt}
                    </div>
                </div>
            </Link>
        </div>
    )
};


export default VideoIndexItem;
