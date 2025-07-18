
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export async function GetData(page = 2) {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&sort_by=popularity.desc&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.error(err));

}

export async function SearchMovies(query, page = 1) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.error(err));

}


export async function MovieDetails(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&include_adult=false`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.error(err));

}