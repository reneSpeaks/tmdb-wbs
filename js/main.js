import {searchMovies} from "./modules/network.js";

window.onload = async () => {
    const searchButton = document.querySelector("#search button");
    searchButton.addEventListener('click', searchMovies);

    const themeSelector = document.querySelector('.theme-controller');

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) themeSelector.value = 'light';
    else themeSelector.value = 'dark';

    await searchMovies();
}