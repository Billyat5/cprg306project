import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
    return (
<<<<<<< Updated upstream
        <div className="flex justify-center my-4 mb-5">
            <button className="mx-4 hover:underline font-bold text-xl"
=======
        <div className="flex justify-center my-4 text-xl">
            <button className='mx-4 hover:underline font-bold'
>>>>>>> Stashed changes
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
            >
                ⬅ Previous
            </button>
<<<<<<< Updated upstream
            <button className="hover:underline font-bold text-xl"
=======
            <button className="hover:underline font-bold"
>>>>>>> Stashed changes
                onClick={() => onPageChange(currentPage + 1)}
               
            >
                Next ➡
            </button>
        </div>
    );
};

export default Pagination;
