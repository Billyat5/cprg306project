// app/components/Header.js
import React, { useContext } from 'react';
import PageContext from '../PageContext';

const Header = () => {
    const { setShowMainPage } = useContext(PageContext);

    return (
        <header className="bg-blue-300 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <h1 
                  className="text-xl font-bold cursor-pointer"
                  onClick={() => setShowMainPage(true)}
                >
                    HaHaHollywood
                </h1>
            </nav>
        </header>
    );
};

export default Header;
