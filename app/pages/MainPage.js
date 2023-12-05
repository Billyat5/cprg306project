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
        <div>
            <SearchBar onSearch={handleSearch} />
            <FeaturedMovies />
            <Trending />
        </div>
    );
};

export default MainPage;
