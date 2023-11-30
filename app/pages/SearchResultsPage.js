// app/pages/SearchResultsPage.js
import React, { useState, useContext } from 'react';
import PageContext from '../PageContext';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import MovieListItem from '../components/MovieListItem';
import Pagination from '../components/Pagination';

const SearchResultsPage = () => {
    const { setShowMainPage } = useContext(PageContext);
    
    // Placeholder for movie search results. 
    // This should be replaced with actual movie data fetched from an API.
    const [movies, setMovies] = useState([
        { id: 1, title: " Movie 1" },
        { id: 2, title: " Movie 2" },
        { id: 3, title: " Movie 3" },
        { id: 4, title: " Movie 4" },
        { id: 5, title: " Movie 5" },
        { id: 6, title: " Movie 6" },
        // ... more movie items
    ]);

    // Placeholder for pagination. Assume 5 pages for demonstration.
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 2;

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Here you would fetch new page data
    };

    return (
        <div>
            <button onClick={() => setShowMainPage(true)}>Back to Home</button>
            <SearchBar onSearch={() => {}} /> {/* Search functionality */}
            <FilterSidebar /> {/* Filters for search results */}
            <div>
                {movies.map(movie => (
                    <MovieListItem key={movie.id} movie={movie} />
                ))}
            </div>
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
            />
        </div>
    );
};

export default SearchResultsPage;
