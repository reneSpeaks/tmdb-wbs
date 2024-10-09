import {getMovies} from "./modules/network.js";
import {addMovieCard} from "./modules/ui.js";

window.onload = async () => {
    const movies = await getMovies('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');

    for (let movie of movies) {
        addMovieCard(movie);
    }
}