// FUNCTIONS RELATED TO CREATING AND MANIPULATING DOM ELEMENTS

export function addMovieCard(movie) {
    // GET MOVIES SECTION
    const movieSection = document.querySelector('#movies');

    // TODO: CREATE MOVIE CARD DESIGN
}

const createElement = (tag, text, parent, attributes) => {
    const element = document.createElement(tag);
    element.textContent = text;

    if (attributes) {
        for (const attribute of attributes) {
            element.setAttribute(attribute, attributes[attribute]);
        }
    }

    parent.appendChild(element);
    return element;
}