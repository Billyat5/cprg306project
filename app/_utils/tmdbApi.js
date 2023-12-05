const API_KEY = 'cb09d5d97d2d948a068bd81bce887754';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500'; // Base URL for images

/**
 * Fetches movies based on the given query and page number.
 * @param {string} query - The search query.
 * @param {number} page - The page number for pagination.
 * @returns {Promise<Array>} An array of movie objects.
 */
export const fetchMovies = async (query, page = 1) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map(movie => ({
        ...movie,
        Poster: movie.poster_path ? `${BASE_IMAGE_URL}${movie.poster_path}` : 'default_poster_url.jpg',
        Title: movie.title,
        Year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A'
    }));
};

/**
 * Fetches actors based on the given query and page number.
 * @param {string} query - The search query.
 * @param {number} page - The page number for pagination.
 * @returns {Promise<Array>} An array of actor objects.
 */
export const fetchActors = async (query, page = 1) => {
    const url = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map(actor => ({
        ...actor,
        ProfilePic: actor.profile_path ? `${BASE_IMAGE_URL}${actor.profile_path}` : 'default_profile_pic_url.jpg',
        Name: actor.name
    }));
};
