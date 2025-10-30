import { useState, useCallback } from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <h1>Let's start Jammming!</h1>
      <SearchBar onSearch={search}/>
    </div>
  );
}

export default App;
