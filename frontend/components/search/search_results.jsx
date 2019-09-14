import React from 'react'
import { ResultIndexItem } from './result_index_item'

class SearchResults extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            className: "result-index-item-container",
            marg: "22%",
        }
        this.setFull = this.setFull.bind(this)
        this.setPart = this.setPart.bind(this)
    }

    setFull(){
        this.setState({ marg: "22%" })
    }

    setPart(){
        this.setState({ marg: "8%" })
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.search !== this.props.match.params.search){
            this.props.getSearchResults(this.props.match.params.search)
        }
    }

    componentDidMount(){
        let search = this.props.match.params.search
        this.props.getSearchResults(search)
    }

    render(){
        
        let results = this.props.results.map(result => {
            return (<ResultIndexItem
                key={`${result.id}`}
                result={result}
                className={"result-index-item-container"}
            />)
        })
        $(".fa-bars").off().on("click", () => {
            if(this.state.marg === "22%"){
                this.setPart()
            }else{
                this.setFull()
            }
        })
        let marg = {marginLeft: this.state.marg}
        return(
            <div>
                <ul className="results-index" style={marg}>
                    {results}
                </ul>
            </div>
        )
    }
}

export default SearchResults


