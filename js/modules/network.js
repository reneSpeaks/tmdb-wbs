// API CALL FOR POPULAR MOVIES

export class Movie {
    constructor(id, title, img, description) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.description = description;
    }
}

export const getMovies = async () => {
    let movies = [];

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDVjMzY2OWRlOGY1NDUwODNjYzgzYTZlOTNhY2RkNSIsIm5iZiI6MTcyODM5NDQ3Ny4xNDQzNTUsInN1YiI6IjY3MDNjN2QyNTA4ZGZhN2JhMzc5NTJhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X7jR77C4O3Ik904DIzUWB_rM12RZAFAo92NF80_tZJc'
        }
    };

    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    if (!response.ok) throw new Error('Something went wrong');
    const data = await response.json();

    for (const movie of data.results) {
        let newMovie = new Movie(movie.id, movie.title, movie.poster_path, movie.overview);
        movies.push(newMovie);
    }

    return movies;
}

