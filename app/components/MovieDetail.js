import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../_utils/tmdbApi';

const MovieDetailPage = ({movie}) => {
    // const { id } = useParams();
    // const [movieDetails, setMovieDetails] = useState(null);

    // useEffect(() => {
    //     const loadMovieDetails = async () => {
    //         const details = await fetchMovieDetails(id);
    //         setMovieDetails(details);
    //     };

    //     loadMovieDetails();
    // }, [id]);

    // if (!movieDetails) {
    //     return <div>Loading...</div>;
    // }

    // return (
    //     <div>
    //         <h1>{movieDetails.title}</h1>
    //         <h5>{movieDetails.release_date}</h5>
    //     </div>
    // );

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <h5>{movie.release_date}</h5>
            {/* Render other movie details */}
        </div>
    );

};

export default MovieDetailPage;
