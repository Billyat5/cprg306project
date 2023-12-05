"use client";
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { SearchProvider } from './context/SearchContext';
import PageContext from './context/PageContext';
import MainPage from './pages/MainPage';
import SearchResultsPage from './pages/SearchResultsPage';

const Page = () => {
    const [showMainPage, setShowMainPage] = useState(true);

    return (
        <SearchProvider>
            <PageContext.Provider value={{ showMainPage, setShowMainPage }}>
                <Header />
                {showMainPage ? <MainPage /> : <SearchResultsPage />}
                <Footer />
            </PageContext.Provider>
        </SearchProvider>
    );
};

export default Page;
