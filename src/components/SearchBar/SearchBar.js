import "./SearchBar.css";
import { useState, useCallback } from "react";

export default function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(searchTerm);
    }, [props.onSearch, searchTerm])

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song Title" onChange={handleTermChange}/>
            <button className="SearchButton" onClick={search}>Search</button>
        </div>
    );
};


