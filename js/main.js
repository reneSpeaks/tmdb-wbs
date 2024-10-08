import {getMovies} from "./modules/network.js";

window.onload = async () => {
    const movies = await getMovies();

    console.log(movies);
}