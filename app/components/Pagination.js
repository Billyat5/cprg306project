import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
    return (
        <div className="flex justify-center my-4">
            <button className='mx-4'
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
            >
                ⬅Previous
            </button>
            <button 
                onClick={() => onPageChange(currentPage + 1)}
               
            >
                Next➡
            </button>
        </div>
    );
};

export default Pagination;
