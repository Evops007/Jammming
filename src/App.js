import { useState, useCallback } from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';


function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const search = useCallback((term) => {
      Spotify.search(term).then(setSearchResults)
    }, [])

    const addTrack = useCallback(
      (track) => {
        if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
          return;
  
        setPlaylistTracks((prevTracks) => [...prevTracks, track]);
      },
      [playlistTracks]
    );

    const removeTrack = useCallback((track) => {
      setPlaylistTracks((currentTrack) => currentTrack.id !== track.id);
    }, [])

    const updatePlaylistName = useCallback((name) => {
      setPlaylistName(name);
    }, []);

    const savePlaylist = useCallback(() => {
      const trackUris = playlistTracks.map((track) => track.uri);


    }, [playlistName, playlistTracks]);

  return (
    <div>
      <h1>Let's start Jammming!</h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist 
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
            onRemove={removeTrack}
            playlistName={playlistName}
            playlistTracks={playlistTracks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
