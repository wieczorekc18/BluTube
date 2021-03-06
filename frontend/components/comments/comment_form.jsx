import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { createComment } from '../../actions/comments'
import { Redirect } from 'react-router';

const msp = state => {
    return {
        currentUser: state.session.currentUser, //important
    }
};

const mdp = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment.body, comment.videoId, comment.parentCommentId))
    }
}

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: "",
            videoId: this.props.match.params.videoId,
            parentCommentId: null,
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update() {
        return (e) => {
            this.setState({ body: e.target.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.props.currentUser){
            this.props.createComment(this.state)
            this.setState({
                body: "",
                videoId: this.props.match.params.videoId,
                parentCommentId: null,
            })
        }else{
            <Redirect to="/login" />
        }
    }

    handleReply(e){
        e.preventDefault();
    }

    render(){
        let body
        this.state.body ? body = this.state.body : body = ""
        return(
            <div className="comment-form-section">
                <img className="comment-form-icon" src={window.userIcon2} />
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input className="comment-text-input" type="text" placeholder="Add a Public Comment" value={body} onChange={this.update()}/>
                    <input className="comment-button" type="submit" value="Comment"/>
                </form>
            </div>
        )
    }

}

export default withRouter(connect(msp, mdp)(CommentForm));