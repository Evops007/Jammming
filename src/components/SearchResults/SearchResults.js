import "./SearchResults.css"

import Tracklist from './TrackList/TrackList';

const SearchResults = (props) => {
    return (
        <div className="searchResult">
            <h2>
                Results
            </h2>
            <Tracklist 
                tracks={props.SearchResults} onAdd={props.onAdd}
            />
        </div>
    )
}

export default SearchResults