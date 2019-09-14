import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../videos/index_item'


export const ResultIndexItem = props => {
    let uploadedAt = formatDate(props.result.created_at)
    let uploader;
    props.result.uploader ? uploader = props.result.uploader : uploader = { username: "" }
    let className = props.className
    return (
        <div className={className}>
            <Link to={`/videos/${props.result.id}`}>
                <div className="result-index-item">
                    <img className="result-index-item-thumb" src={props.result.thumb} alt="thumb here" />
                    {/* <img className="video-index-item-thumb" src={window.bellyflopthumb} alt="thumb here" /> */}
                    {/* <div className="video-index-item-text">
                        <div className="video-labels">
                            <span className="index-video-title">{props.result.title}</span>
                            <br />
                            {uploader.username}
                            <br />
                            {props.result.views} views • {uploadedAt}
                        </div>
                    </div> 
                    ALLLLL THIS NEEDS TO BE STYLED ANEW
                    */}
                    <div className="result-text-labels">
                        <div className="result-title">
                            {props.result.title}
                        </div>
                        <div className="result-labels">
                            {uploader.username} • {props.result.views} views • {uploadedAt}
                        </div>
                        <div className="result-description">
                            {props.result.description}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
};