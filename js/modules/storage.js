// FUNCTIONS RELATED TO: LOCALSTORAGE OPERATIONS

import {PersonalNote} from "./objects.js";

export const isFavorite = (movie) => {
    const favorites = getFavorites();
    const found = favorites.find((item) => item.id === movie.id);
    return !!found;
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

export const editPersonalNote = (movie) => {
    const newNote = prompt('Personal Note:');
    if (newNote !== null) {
        addPersonalNote(movie, newNote);
        return newNote;
    }
}

export const addPersonalNote = (movie, text = "") => {
    const notes = getPersonalNotes();

    if (!hasPersonalNote(movie) && text !== "") {
        const newNote = new PersonalNote(movie.id, text);
        notes.push(newNote);
        localStorage.setItem("personalNotes", JSON.stringify(notes));
    } else if (hasPersonalNote(movie) && text !== "") {
        const newNote = new PersonalNote(movie.id, text);
        const newPersonalNotes = notes.filter((item) => item.movieId !== movie.id);
        newPersonalNotes.push(newNote);
        localStorage.setItem("personalNotes", JSON.stringify(newPersonalNotes));
    } else {
        const newPersonalNotes = notes.filter((item) => item.movieId !== movie.id);
        localStorage.setItem("personalNotes", JSON.stringify(newPersonalNotes));
    }
}

export const getPersonalNote = (movie) => {
    const notes = getPersonalNotes();
    const note = notes.find((item) => item.movieId === movie.id);
    if (!note) return '';
    else return note.text;
}