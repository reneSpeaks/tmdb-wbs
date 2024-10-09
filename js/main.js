import {getMovies} from "./modules/network.js";

window.onload = async () => {
    const movies = await getMovies('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');

    console.log(movies);
}