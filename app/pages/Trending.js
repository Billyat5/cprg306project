import React, {useState, useEffect} from "react";
import { fetchTrendingMovies } from "../_utils/tmdbApi";

const Trending = () => {
    const [state, setState] = useState([]);

    const fetchTrending = async () => {
        const trendingMovies = await fetchTrendingMovies();
        setState(trendingMovies);
    };

    useEffect(() => {
        //call the function only when the app is initially rendered
        fetchTrending();
    }, []);

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Trending</h1>
                    <i className="bi bi-fire"></i> 
                </div>
            </div>
            {
                state.map((movie) => {
                    const { Title, Poster, ReleaseDate, VoteAverage, id } = movie;
                    return (
                        <div key={id} className="col" id="card">
                            <div className="card">
                                <img src={Poster} className="card-img-top" alt={Title} />
                                <div className="card-body">
                                    <h5 className="card-title">Movie Name: {Title}</h5>
                                    <p className="card-text">Release Date: {ReleaseDate}</p>
                                    <p className="card-text">Rating: {VoteAverage} / 10</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </>
);

}
export default Trending;