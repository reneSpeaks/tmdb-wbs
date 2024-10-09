// FUNCTIONS RELATED TO: LOCALSTORAGE OPERATIONS

export const toggleFavorite = (movie) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite(movie)) {
        const newFavorites = favorites.filter((item) => item.id !== movie.id);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

export const isFavorite = (movie) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const found = favorites.find((item) => item.id === movie.id);
    return !!found;
}