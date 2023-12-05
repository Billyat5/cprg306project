const SearchBar = ({ onSearch, value, onChange }) => {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Search movies..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                className="text-black"
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default SearchBar;