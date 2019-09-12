import React from 'react'
import { withRouter } from "react-router";
import { connect } from 'react-redux';

const msp = state => {
    return {
        videos: Object.values(state.videos), //important
    }
};

const mdp = dispatch => {
    return {
        // createComment: comment => dispatch(createComment(comment.body, comment.videoId, comment.parentCommentId))
    }
}

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: ""
        }
        this.updateSearch = this.updateSearch.bind(this)
    }

    updateSearch(e){
        this.setState({ search: e.target.value });
    }

    render(){
        let results
        let className = "nothing-here"
        if(this.state.search.length > 0){
            results = this.props.videos.filter(video => {
                return video.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            })
            results = results.slice(0, 10)
            results = results.map(vid => {
                return (
                    <li className="suggestion" onClick={this.handleSuggestion}>{vid.title}</li>
                )
            })
        }
        if (results && results.length > 0){
            className = "search-suggestions"
        }
        return(
            <li>
                <form className="search-form" action={this.handleSearchSubmit}>
                    <input className="logged-search-bar" type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch}/>
                    <button className="search-button"><i className="fas fa-search"></i></button>
                </form>
                <ul className={className}>
                    {results}
                </ul>
            </li>
        )
    }
}

// export default SearchBar
export default withRouter(connect(msp, mdp)(SearchBar))