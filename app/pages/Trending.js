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
        <div className='container mx-auto px-4'>
            <div className='my-8'>
                <h1 className='text-2xl font-bold'>Trending</h1>
                <i className='bi bi-fire'></i> 
            </div>
            <div className='flex flex-wrap -mx-2'>
                {state.map((movie) => {
                    const { Title, Poster, ReleaseDate, VoteAverage, id } = movie;
                    return (
                        <div key={id} className='w-full md:w-1/3 lg:w-1/4 px-2 mb-4'>
                            <div className='bg-white rounded overflow-hidden shadow-lg h-full flex flex-col'>
                                <img src={Poster} alt={Title} className='w-full h-auto' />
                                <div className='p-4 flex flex-col justify-between flex-grow'>
                                    <h5 className='font-bold text-lg mb-2 line-clamp-2'>{Title}</h5>
                                    <p className='text-gray-700 text-base'>Release Date: {ReleaseDate}</p>
                                    <p className='text-gray-700 text-base mb-4'>Rating: {VoteAverage} / 10</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Trending;