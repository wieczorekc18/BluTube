import { connect } from 'react-redux';
import SearchResults from './search_results'
import { getSearchResults } from '../../actions/videos'


const msp = state => {
    let results = Object.values(state.searched)
    return {
        results: results
    }
}

// might have to pass search through url to keep track of it

const mdp = dispatch => {
    return {
        getSearchResults: (search) => dispatch(getSearchResults(search)),
    }
}

export default connect(msp, mdp)(SearchResults)