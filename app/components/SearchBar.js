// app/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => onSearch(searchTerm)}>Search</button>
        </div>
    );
};

export default SearchBar;
