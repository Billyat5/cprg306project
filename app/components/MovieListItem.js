// app/components/MovieListItem.js
import React from 'react';

const MovieListItem = ({ movie }) => {
    return (
        <div className="border p-4 mb-2">
            <h3>{movie.title}</h3>
            {/* Additional movie details can be added here */}
        </div>
    );
};

export default MovieListItem;
