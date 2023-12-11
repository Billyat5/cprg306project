import React, { useContext } from 'react';
import PageContext from '../context/PageContext';

const Header = () => {
    const { setShowMainPage } = useContext(PageContext);

    return (
        <header className="bg-blue-500 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <h1 
                  className="text-2xl font-bold cursor-pointer"
                  onClick={() => setShowMainPage(true)}
                >
                    HaHaHollywood
                </h1>
            </nav>
        </header>
    );
};

export default Header;
