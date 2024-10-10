// FUNCTIONS RELATED TO: LOCALSTORAGE OPERATIONS

import {PersonalNote} from "./objects.js";

export const toggleFavorite = (movie) => {
    const favorites = getFavorites();

    if (isFavorite(movie)) {
        const newFavorites = favorites.filter((item) => item.id !== movie.id);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

export const isFavorite = (movie) => {
    const favorites = getFavorites();
    const found = favorites.find((item) => item.id === movie.id);
    return !!found;
}

export const addPersonalNote = (movie, text = undefined) => {
    const notes = getPersonalNotes();

    if (!hasPersonalNote(movie) && text !== undefined) {
        const newNote = new PersonalNote(movie.id, text);
        notes.push(newNote);
        localStorage.setItem("personalNotes", JSON.stringify(notes));
    }
}

export const hasPersonalNote = (movie) => {
    const notes = getPersonalNotes();
    const found = notes.find((item) => item.movieId === movie.id);
    return !!found;
}

export const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

export const getPersonalNotes = () => {
    return JSON.parse(localStorage.getItem('personalNotes')) || [];
}