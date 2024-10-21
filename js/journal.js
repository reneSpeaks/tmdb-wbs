import {addMovieCard} from "./modules/ui.js";
import {getLocalStorage} from "./modules/storage.js";

window.onload = async () => {

    const movies = getLocalStorage('favorites');
    for (let movie of movies) {
        addMovieCard(movie, 'journal');
    }
}