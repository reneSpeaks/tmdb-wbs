export class Movie {
    constructor(id, title, img, description, rating) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.description = description;
        this.rating = rating;
    }
}

export class PersonalNote {
    id;
    movieId;
    noteText;

    constructor(movieId, noteText) {
        this.id = crypto.randomUUID();
        this.movieId = movieId;
        this.noteText = noteText;
    }
}