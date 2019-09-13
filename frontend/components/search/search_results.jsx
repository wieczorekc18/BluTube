import React from 'react'
import { ResultIndexItem } from './result_index_item'

class SearchResults extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidUpdate(prevProps){
        debugger
        if (prevProps.match.params.search !== this.props.match.params.search){
            this.props.getSearchResults(this.props.match.params.search)
        }
    }

    componentDidMount(){
        let search = this.props.match.params.search
        this.props.getSearchResults(search)
    }

    render(){
        debugger
        let results = this.props.results.map(result => {
            return (<ResultIndexItem
                key={`${result.id}`}
                result={result}
            />)
        })
        return(
            <div>
                <ul className="results-index">
                    {results}
                </ul>
            </div>
        )
    }
}

export default SearchResults