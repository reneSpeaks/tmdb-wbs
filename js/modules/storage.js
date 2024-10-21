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
    if (storageName === 'favorites') return storage.some((item) => item.id === storageItem.id);
    else if (storageName === 'personalNotes') return storage.some((item) => item.movieId === storageItem.id);
};

export const toggleFavorite = (movie) => {
    const favorites = getLocalStorage('favorites');

    if (isStored('favorites', movie)) {
        const newFavorites = favorites.filter((item) => item.id !== movie.id);
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
        notes.push(new PersonalNote(movie.id, text));
        saveLocalStorage('personalNotes', notes);
    } else if (isStored('personalNotes', movie) && text !== "") {
        const newPersonalNotes = notes.filter((item) => item.movieId !== movie.id);
        newPersonalNotes.push(new PersonalNote(movie.id, text));
        saveLocalStorage('personalNotes', newPersonalNotes);
    } else {
        const newPersonalNotes = notes.filter((item) => item.movieId !== movie.id);
        saveLocalStorage('personalNotes', newPersonalNotes);
    }
};

export const getPersonalNote = (movie) => {
    const notes = getLocalStorage('personalNotes');
    const note = notes.find((item) => item.movieId === movie.id);
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