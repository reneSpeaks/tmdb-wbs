// FUNCTIONS RELATED TO: LOCALSTORAGE OPERATIONS

import {PersonalNote} from "./objects.js";

export const getLocalStorage = (storageName) => {
    return JSON.parse(localStorage.getItem(storageName)) || [];
};

const saveLocalStorage = (storageName, storageArray) => {
    localStorage.setItem(storageName, JSON.stringify(storageArray));
};

export const isStored = (storageName, storageItem) => {
    const storage = getLocalStorage(storageName);
    return storage.some((item) => item.movieId === storageItem.movieId);
};

export const toggleFavorite = (movie) => {
    const favorites = getLocalStorage('favorites');

    if (isStored('favorites', movie)) {
        const newFavorites = favorites.filter((item) => item.movieId !== movie.movieId);
        saveLocalStorage('favorites', newFavorites);
    } else {
        favorites.push(movie);
        saveLocalStorage('favorites', favorites);
    }
};

export const editPersonalNote = (movie) => {
    const newNote = prompt('Personal Note:');
    if (newNote !== null) {
        addPersonalNote(movie, newNote);
        return newNote;
    }
};

export const addPersonalNote = (movie, text = "") => {
    const notes = getLocalStorage('personalNotes');

    if (!isStored('personalNotes', movie) && text !== "") {
        notes.push(new PersonalNote(movie.movieId, text));
        saveLocalStorage('personalNotes', notes);
    } else if (isStored('personalNotes', movie) && text !== "") {
        const newPersonalNotes = notes.filter((item) => item.movieId !== movie.movieId);
        newPersonalNotes.push(new PersonalNote(movie.movieId, text));
        saveLocalStorage('personalNotes', newPersonalNotes);
    } else {
        const newPersonalNotes = notes.filter((item) => item.movieId !== movie.movieId);
        saveLocalStorage('personalNotes', newPersonalNotes);
    }
};

export const getPersonalNote = (movie) => {
    const notes = getLocalStorage('personalNotes');
    const note = notes.find((item) => item.movieId === movie.movieId);
    if (!note) return '';
    else return note.text;
};

// SOME NOT YET DONE REFACTORED FUNCTIONS

// const getStoredItem = (storageName, storageReference = undefined) => {
//     if (!storageReference) return null;
//     if (storageName === 'personalNotes') {
//         const notes = getLocalStorage('personalNotes');
//         const note = notes.find((item) => item.movieId === storageReference.id);
//         if (!note) return '';
//         else return note.text;
//     }
// }