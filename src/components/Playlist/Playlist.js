import {useCallback} from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
    const handleNameChange = useCallback((e) => {
        props.onNameChange(e.target.value)
    }, [props.onNameChange]);

    return(
        <div className="Playlist">
            <input onChange={handleNameChange} defaultValue={"New Playlist"}/>
            <TrackList 
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemoval={props.onRemove}
            />
            <button className="Playlist-save" onClick={props.onSave}>
                Save to Spotify
            </button>

        </div>
    )
};

export default Playlist;