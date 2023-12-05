import React, { useContext, useEffect, useState } from 'react';
import PageContext from '../context/PageContext';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import MovieListItem from '../components/MovieListItem';
import ActorListItem from '../components/ActorListItem';
import Pagination from '../components/Pagination';
import { SearchContext } from '../context/SearchContext';
import { fetchMovies, fetchActors } from '../_utils/tmdbApi'; // Assuming these functions are in tmdbApi.js

const SearchResultsPage = () => {
    const { setShowMainPage } = useContext(PageContext);
    const { searchResults, setSearchResults, setSearchTerm } = useContext(SearchContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5); // Adjust based on actual results
    const [searchQuery, setSearchQuery] = useState("");

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        
    };

    const handleSearch = async (term) => {
        const movieResults = await fetchMovies(term);
        const actorResults = await fetchActors(term);
        setSearchResults({ movies: movieResults || [], actors: actorResults || [] });
        setSearchTerm(term); // This will update the searchTerm in context
        setCurrentPage(1);
        setSearchQuery("");
    };

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query); // Update the search query state
    };

    useEffect(() => {
        // Update logic for totalPages or other effects
    }, [searchResults, currentPage]);

    return (
        <div>
            <button onClick={() => setShowMainPage(true)}>Back to Home</button>
            <SearchBar 
            onSearch={() => handleSearch(searchQuery)}
            value={searchQuery}
            onChange={handleSearchQueryChange}
            />
            <FilterSidebar />

            {searchResults.actors && searchResults.actors.length > 0 && (
                <div>
                    <h2>Actors Found:</h2>
                    <div className="flex flex-wrap justify-start space-x-4">
                        {searchResults.actors.map(actor => (
                            <ActorListItem key={actor.id} actor={actor} />
                    ))}
                </div>
            </div>
            )}

            <div>
                <h2>Movies Found:</h2>
                {searchResults.movies && searchResults.movies.length > 0 ? (
                    searchResults.movies.map(movie => (
                        <MovieListItem key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>No movies found.</p>
                )}
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
