import React from 'react';

const MovieListItem = ({ movie }) => {
    return (
        <div className='bg-white rounded overflow-hidden shadow-lg flex flex-col h-full'>
            <img 
                src={movie.Poster} 
                alt={`Poster of ${movie.Title}`} 
                className='w-full h-auto object-cover'
            />
            <div className='p-4 flex flex-col justify-between'>
                <h5 className='font-bold text-lg mb-2 line-clamp-2'>{movie.Title}</h5>
                <p className='text-gray-700 text-base'>Year: {movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieListItem;
