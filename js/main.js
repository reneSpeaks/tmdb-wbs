// API CALL FOR POPULAR MOVIES

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDVjMzY2OWRlOGY1NDUwODNjYzgzYTZlOTNhY2RkNSIsIm5iZiI6MTcyODMwMzY3My45NDIxOTgsInN1YiI6IjY3MDNjN2QyNTA4ZGZhN2JhMzc5NTJhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LYG6AziZZ7E9BNTMEIa3jYKA92mAj4q-l9NNAjtBAX8'
    }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));