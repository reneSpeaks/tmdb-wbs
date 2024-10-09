// FUNCTIONS RELATED TO CREATING AND MANIPULATING DOM ELEMENTS

import {isFavorite, toggleFavorite} from "./storage.js";

const movieSection = document.querySelector('#movies');

export function addMovieCard(movie) {
    const cardWrapper = createElement('div', '', movieSection, {
        class: 'card-wrapper relative flex flex-col sm:grid sm:grid-cols-2 bg-white shadow-sm border border-slate-200 rounded-lg sm:h-full sm:max-h-80 w-full max-w-96',
    });

    const leftContent = createElement('div', '', cardWrapper, {
        class: 'relative m-2.5 overflow-hidden flex items-start flex-col gap-1',
    });

    const rightContent = createElement('div', '', cardWrapper, {
        class: 'flex flex-col relative p-4',
    });

    const cardImage = createElement('img', '', leftContent, {
        src: 'https://www.themoviedb.org/t/p/w500' + movie.img,
        alt: `${movie.title} Movie Poster`,
        class: 'w-full sm:min-w-28 rounded-md object-cover',
    });

    const favoriteButton = createElement('button', '', leftContent, {
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
        class: 'mb-2 text-slate-800 text-xl font-semibold sm:absolute sm:w-96 sm:-top-7 sm:-left-full',
    });

    const cardDescription = createElement('p', movie.description, rightContent, {
       class: 'h-full max-h-60 text-slate-600 leading-normal font-light overflow-hidden',
    });

    const cardRating = createElement('div', '', rightContent, {
        class: 'sm:absolute sm:bottom-0 sm:w-3/4 mx-3 border-t border-slate-200 pb-3 pt-2 px-1',
    });

    const ratingSpan = createElement('span', `User Rating: ${movie.rating}`, cardRating, {
        class: 'text-sm text-slate-600 font-medium',
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

const setFavoriteButtonColor = (movie) => {
    if (isFavorite(movie)) {
        return 'text-red-700 hover:text-red-700 active:text-slate-400';
    } else {
        return 'text-slate-700 hover:text-red-700 active:text-red-400';
    }
}