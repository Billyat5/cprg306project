import React, { useContext, useEffect, useState } from 'react';
import PageContext from '../context/PageContext';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import MovieListItem from '../components/MovieListItem';
import ActorListItem from '../components/ActorListItem';
import Pagination from '../components/Pagination';
import { SearchContext } from '../context/SearchContext';
import { fetchMovies, fetchActors } from '../_utils/tmdbApi';

const SearchResultsPage = () => {
    const { setShowMainPage } = useContext(PageContext);
    const { searchResults, setSearchResults, setSearchTerm } = useContext(SearchContext);  
    const [currentPage, setCurrentPage] = useState(1);   
    const [totalPages, setTotalPages] = useState(0); 
    const [searchQuery, setSearchQuery] = useState("");
    

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleSearch = async (term, page = 1) => {
        const movieResults = await fetchMovies(term, page);
        const actorResults = await fetchActors(term, page);
        setSearchResults({ movies: movieResults || [], actors: actorResults || [] });
        setSearchTerm(term);
        setCurrentPage(page);
        //setSearchQuery("");
    };

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
    };

    //useEffect(() => {
        // Update logic for totalPages or other effects
    //}, [searchResults, currentPage]);

    // useEffect(() => {
    //     handleSearch(searchQuery, currentPage);
    // }, [currentPage]);

    useEffect(() => {
        if (searchQuery) {
            handleSearch(searchQuery, currentPage);
        }
    }, [currentPage, searchQuery]);
    
    

    return (
        <div className='container mx-auto px-2 my-4'>
            <div>
                <button 
                    onClick={() => setShowMainPage(true)} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Back to Home
                </button>
                <SearchBar 
                    onSearch={() => handleSearch(searchQuery, 1)}
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                />
            </div>
            {searchResults.actors && searchResults.actors.length > 0 && (
                <div>
                    <h2 >Actors Found:</h2>
                    <div className="flex flex-wrap justify-start space-x-4">
                        {searchResults.actors.map(actor => (
                            <ActorListItem key={actor.id} actor={actor} />
                        ))}
                    </div>
                </div>
            )}

            <div>
                <h2 className="text-2xl font-bold mb-4">Movies Found:</h2>
                <div className='flex flex-wrap -mx-2'>
                    {searchResults.movies && searchResults.movies.length > 0 ? (
                        searchResults.movies.map(movie => (
                            <div key={movie.id} className='w-full md:w-1/3 lg:w-1/4 px-2 mb-4'>
                                <MovieListItem movie={movie} />
                            </div>
                        ))
                    ) : (
                        <p>No movies found.</p>
                    )}
                </div>
            </div>
            
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    );
};

export default SearchResultsPage;
