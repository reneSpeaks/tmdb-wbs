// FUNCTIONS RELATED TO: LOCALSTORAGE OPERATIONS

export const addOrRemoveFavorite = (movie) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const found = favorites.find((item) => item.id === movie.id);

    if (found) {
        const newFavorite = favorites.filter((item) => item.id !== movie.id);
        localStorage.setItem('favorites', JSON.stringify(newFavorite));
    } else {
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

export const checkFavorite = (movie) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const found = favorites.find((item) => item.id === movie.id);
    return !!found;
}