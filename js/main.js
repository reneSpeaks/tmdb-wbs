import {searchMovies} from "./modules/network.js";

window.onload = async () => {
    const searchButton = document.querySelector("#search button");
    searchButton.addEventListener('click', searchMovies);

    await searchMovies();
}