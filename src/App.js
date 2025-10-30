import { useState, useCallback } from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const search = useCallback((term) => {

  });

  const updatePlaylistName = useCallback((name) => {
      setPlaylistName(name);
    }, []);

  return (
    <div>
      <h1>Let's start Jammming!</h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <Playlist 
            onNameChange={updatePlaylistName}

          />
        </div>
      </div>
    </div>
  );
}

export default App;
