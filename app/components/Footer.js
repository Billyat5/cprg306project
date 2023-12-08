// app/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} HaHaHollywood. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
