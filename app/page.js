"use client";
// app/page.js
import React, { useState } from 'react';
import PageContext from './PageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import SearchResultsPage from './pages/SearchResultsPage';

const Page = () => {
    const [showMainPage, setShowMainPage] = useState(true);

    return (
    <PageContext.Provider value={{ showMainPage, setShowMainPage }}>
        <Header />
        {showMainPage ? <MainPage /> : <SearchResultsPage />}
        <Footer />
    </PageContext.Provider>
    );
};

export default Page;
