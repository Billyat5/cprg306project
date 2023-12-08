const SearchBar = ({ onSearch, value, onChange }) => {
    return (
<<<<<<< Updated upstream
        <div className="flex justify-center items-center mt-6 mb-4">
=======
        <div className="flex justify-center items-center mt-8">
>>>>>>> Stashed changes
            <input 
                type="text" 
                placeholder="Search movies..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                className="p-2 w-full md:w-1/2 lg:w-1/3 border border-gray-300 text-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button 
                onClick={onSearch}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
