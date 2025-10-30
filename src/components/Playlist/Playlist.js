import {useCallback} from "react";
import ".Playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
    const handleNameChange = useCallback((e) => {
        props.onNameChange(e.target.value)
    }, [props.onNameChange]);

    return(
        <div className="Playlist">
            <input onChange={handleNameChange} defaultValue={"New Playlist"}/>
            <TrackList />

        </div>
    )
};

export default Playlist;