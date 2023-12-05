import React, { useState, useEffect } from "react";

const Trending = () => {

    const [state,setState] = useState([]);
    const fetchTrending = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=be9949e970407a45bc0dd89598939e4c&language=en-US`);
        //fetching data in JSON format
        const dataJSON = await data.json(); 
        setState(dataJSON.results);
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
                    {/* Bootstrap icon installation: npm i bootstrap-icons*/}
                    <i class="bi bi-fire"></i>                    
                </div>
            </div>
            {
                state.map((Value) => {
                    const {title, poster_path, release_date, vote_average, id,} = Value;
                    const roundedVote = Math.round(vote_average);
                    return (
                        <>
                        <div key={id} className="col" id="card">
                            <div className="card" key={id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt={title} />
                                <div className="card-body">
                                    <h5 className="card-title">Movie Name: {title}</h5>
                                    <p className="card-text">Date: {release_date}</p>
                                    <p className="card-text">Rating: {roundedVote} / 10</p>
                                    
                                </div>

                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </>
    );
};

export default Trending;