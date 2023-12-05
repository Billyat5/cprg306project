// app/pages/MainPage.js
import React, { useContext } from 'react';
import PageContext from '../PageContext';
import SearchBar from '../components/SearchBar';
import FeaturedMovies from '../components/FeaturedMovies';
import Trending from './Trending';


const MainPage = () => {
    const { setShowMainPage } = useContext(PageContext);

    const handleSearch = (searchTerm) => {
        setShowMainPage(false); // Switch to SearchResultsPage
    };

    return (
        <div className="p-4">
            <SearchBar onSearch={handleSearch} className="mb-4" />
            <FeaturedMovies />
            <Trending />
        </div>
    );
};

export default MainPage;
