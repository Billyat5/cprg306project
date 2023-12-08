import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
    return (
        <div className="flex justify-center my-4">
            <button className="mx-4 text-xl font-bold hover:underline"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
            >
                ⬅ Previous
            </button>
            <button 
                className="text-xl font-bold hover:underline"
                onClick={() => onPageChange(currentPage + 1)}

            >
                Next ➡
            </button>
        </div>
    );
};
export default Pagination;