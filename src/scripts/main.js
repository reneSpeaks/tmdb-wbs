import {searchMovies} from "./modules/network.js";

window.onload = async () => {
    // EVENT LISTENER FOR SEARCHBAR
    const searchButton = document.querySelector("#search button");
    searchButton.addEventListener('click', searchMovies);

    // ON LOAD CHECK IF DARK MODE OR NOT
    const themeSelector = document.querySelector('.theme-controller');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) themeSelector.value = 'light';
    else themeSelector.value = 'dark';

    // GET POPULAR MOVIE API CALL AND POPULATE THE PAGE
    await searchMovies();
}