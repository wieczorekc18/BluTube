import React from 'react';


class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comment: {
                body: ""
            }
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        let videoId = this.props.match.params.videoId
        this.setState({
            comment: {videoId: videoId}
        })
        this.props.createComment(this.state.comment)
    }

    handleReply(e){
        e.preventDefault();
    }

    render(){
        let body 
        this.state.body ? body = this.state.body : body = "" 
        return(
            <div className="comment-form-section">
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add a Public Comment" value={body} onChange={this.update("body")}/>
                    <input type="submit" value="Comment"/>
                </form>
            </div>
        )
    }

}

export default CommentForm;