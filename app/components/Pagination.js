import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
    return (
        <div className="flex justify-center my-4 mb-5">
            <button className="mx-4 hover:underline font-bold text-xl"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
            >
                ⬅ Previous
            </button>
            <button className="hover:underline font-bold text-xl"
                onClick={() => onPageChange(currentPage + 1)}
               
            >
                Next ➡
            </button>
        </div>
    );
};

export default Pagination;
