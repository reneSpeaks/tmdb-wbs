// FUNCTIONS RELATED TO CREATING AND MANIPULATING DOM ELEMENTS

import {editPersonalNote, getPersonalNote, hasPersonalNote, isFavorite, toggleFavorite} from "./storage.js";

export function addMovieCard(movie) {
    const movieSection = document.querySelector('#movies');
    const cardWrapper = createElement('div', '', movieSection, {
        class: 'relative flex flex-col sm:grid sm:grid-cols-2 bg-white shadow-sm border border-slate-200 rounded-tr-3xl rounded-bl-3xl sm:h-full sm:max-h-80 w-full max-w-96',
    });
    const leftContent = createElement('div', '', cardWrapper, {
        class: 'flex items-start flex-col gap-1 m-2.5',
    });
    const rightContent = createElement('div', '', cardWrapper, {
        class: 'flex flex-col relative p-4',
    });
    const cardImage = createElement('img', '', leftContent, {
        src: 'https://www.themoviedb.org/t/p/w500' + movie.img,
        alt: `${movie.title} Movie Poster`,
        class: 'w-full sm:min-w-28 rounded-tr-3xl rounded-bl-3xl object-cover',
    });
    const cardOptions = createElement('div', '', leftContent, {
        class: 'flex flex-row',
    })
    const favoriteButton = createElement('button', '', cardOptions, {
        type: 'button',
        class: `px-4 pt-2 text-lg transition-all hover:scale-110 ${setFavoriteButtonColor(movie)}`,
    });
    favoriteButton.addEventListener('click', () => {
        toggleFavorite(movie);
        favoriteButton.className = `px-4 pt-2 text-lg transition-all hover:scale-110 ${setFavoriteButtonColor(movie)}`;
    });
    const favoriteIcon = createElement('i', '', favoriteButton, {
        class: 'fa-solid fa-heart',
    });
    const cardHeader = createElement('h5', movie.title, rightContent, {
        class: 'sm:absolute mb-2 sm:-top-7 sm:-left-full sm:w-96 text-slate-800 dark:text-slate-500 text-xl font-semibold',
    });
    const cardDescription = createElement('p', movie.description, rightContent, {
        class: 'h-full max-h-60 text-slate-600 leading-normal font-light overflow-hidden',
    });
    const cardRating = createElement('div', `User Rating: ${movie.rating}`, rightContent, {
        class: 'sm:absolute sm:bottom-0 sm:w-3/4 mx-3 mt-2 border-t border-slate-200 pb-3 pt-2 px-1 text-sm text-slate-600 font-medium',
    });

    const personalNotesButton = createElement('button', '', cardOptions, {
        class: `hover:scale-110 transition-all text-lg px-4 pt-2 ${setNoteIndicatorColor(movie)}`,
        onclick: `movie_modal${movie.id}.showModal()`,
    });
    const personalNotesIcon = createElement('i', '', personalNotesButton, {
        class: 'fa-solid fa-pen-to-square',
    });
    const modalDialog = createElement('dialog', '', leftContent, {
        class: 'modal',
        id: `movie_modal${movie.id}`,
    });
    const modalBox = createElement('div', '', modalDialog, {
        class: 'modal-box',
    });
    const modalHeader = createElement('h3', 'Personal Note', modalBox, {
        class: 'text-lg font-bold',
    });
    const modalParagraph = createElement('p', getPersonalNote(movie), modalBox, {
        class: 'py-4',
    });
    const modalAction = createElement('div', '', modalBox, {
        class: 'modal-action',
    });
    const modalEditButton = createElement('button', 'Edit', modalAction, {
        class: 'btn',
    })
    const modalForm = createElement('form', '', modalAction, {
        method: 'dialog',
    });
    const modalCloseButton = createElement('button', 'Close', modalForm, {
        class: 'btn',
    });
    modalEditButton.addEventListener('click', () => {
        modalParagraph.textContent = editPersonalNote(movie);
        personalNotesButton.className = `hover:scale-110 transition-all text-lg px-4 pt-2 ${setNoteIndicatorColor(movie)}`;
    });
}

const createElement = (tag, text, parent, attributes) => {
    const element = document.createElement(tag);
    element.textContent = text;

    if (attributes) {
        for (const attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute]);
        }
    }

    parent.appendChild(element);
    return element;
}

const setNoteIndicatorColor = (movie) => {
    if (hasPersonalNote(movie)) return 'text-red-700 hover:text-red-700 active:text-slate-400';
    else return 'text-slate-700 hover:text-red-700 active:text-red-400';
}

const setFavoriteButtonColor = (movie) => {
    if (isFavorite(movie)) return 'text-red-700 hover:text-red-700 active:text-slate-400';
    else return 'text-slate-700 hover:text-red-700 active:text-red-400';
}