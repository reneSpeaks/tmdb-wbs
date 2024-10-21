// CLASS OBJECT DEFINITIONS TO MAKE THE PAGE SCALABLE AND EASIER MANAGEABLE
// CUTS DOWN CREATED OBJECT TO ONLY THE PIECES THAT ARE NEEDED FROM THE API CALL

export class Movie {
    constructor(movieId, title, img, description, rating) {
        this.movieId = movieId;
        this.title = title;
        this.description = description;
        this.rating = rating;

        // IF THERE'S NO IMAGE PUT PLACEHOLDER IMAGE IN PLACE
        if (img === null) this.img = require('../../img/500x750.png');
        else this.img = 'https://www.themoviedb.org/t/p/w500' + img;
    }
}

export class PersonalNote {
    constructor(movieId, text) {
        this.id = crypto.randomUUID();
        this.movieId = movieId;
        this.text = text;
    }
}