// API CALL FOR MOVIES
// SEARCH QUERY: https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1
// POPULAR MOVIES: https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

import {addMovieCard} from "./ui.js";
import {Movie} from "./objects.js";

export const searchMovies = async () => {
    const moviesSection = document.querySelector('#movies')
    const searchInput = document.querySelector('#search-input');

    const searchQuery = searchInput.value.trim();
    let movies;

    if (searchQuery === '') {
        movies = await getMovies('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
    } else {
        movies = await getMovies(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`);
    }
    moviesSection.innerHTML = '';

    for (let movie of movies) {
        addMovieCard(movie);
    }
}

const getMovies = async (query) => {
    try {
        let movies = [];

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDVjMzY2OWRlOGY1NDUwODNjYzgzYTZlOTNhY2RkNSIsIm5iZiI6MTcyODM5NDQ3Ny4xNDQzNTUsInN1YiI6IjY3MDNjN2QyNTA4ZGZhN2JhMzc5NTJhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X7jR77C4O3Ik904DIzUWB_rM12RZAFAo92NF80_tZJc'
            }
        };

        const response = await fetch(query, options);
        const data = await response.json();

        console.log(data.total_results);

        for (const movie of data.results) {
            let newMovie = new Movie(movie.id, movie.title, movie.poster_path, movie.overview, movie.vote_average);
            movies.push(newMovie);
        }

        return movies;
    } catch (error) {
        console.log(error);
    }
}