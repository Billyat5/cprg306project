import React from 'react';

const MovieListItem = ({ movie }) => {
    return (
        <div className="border p-4 mb-2">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`Poster of ${movie.Title}`} style={{ maxWidth: '200px' }} />
            {/* Additional movie details */}
        </div>
    );
};

export default MovieListItem;