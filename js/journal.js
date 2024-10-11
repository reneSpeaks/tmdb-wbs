import {addMovieCard} from "./modules/ui.js";
import {getFavorites} from "./modules/storage.js";

window.onload = async () => {
    const movies = getFavorites();

    for (let movie of movies) {
        addMovieCard(movie, 'journal');
    }
}