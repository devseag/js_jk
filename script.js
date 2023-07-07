'use strict';

const numberOfFilms = +prompt('How many films you already watched?','');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Tell me the last movie you have watched',''),
      b = prompt('How good was that?',''),
      c = prompt('Tell me the last movie you have watched',''),
      d = prompt('How good was that?','');
      
console.log(a + ' ' + b);
console.log(c + ' ' + d);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
// personalMovieDB.movies[lastWatchedFilm] = review;
// console.log(personalMovieDB);
// console.log(personalMovieDB.movies);
// console.log(personalMovieDB.movies[lastWatchedFilm]);