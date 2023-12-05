// app/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center my-4">
            <button 
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
            >
                Prev
            </button>
            <span className="mx-2">Page {currentPage} of {totalPages}</span>
            <button 
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
