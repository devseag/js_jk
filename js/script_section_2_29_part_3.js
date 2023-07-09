'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('How many films you already watched?','');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('How many films you already watched?','');
	}
}

start();

console.log(numberOfFilms);
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms () {
	for ( let i =0; i < 2; i++) {
		const a = prompt('Tell me the last movie you have watched',''),
			   b = prompt('How good was that?','');
	
		if (a != null && b != null && a != '' && b != '' && a.length < 50){
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if( personalMovieDB.count < 10) {
		console.log('Just a few movies');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Too classic');
	} else if (personalMovieDB.count >= 30) {
		console.log('Nice!');
	} else {
		console.log('Error');
	}
}

detectPersonalLevel();

function showMyDb (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDb(personalMovieDB.privat);

function writeYourGenres () {
	for ( let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] =  prompt(`Your fav genre with number ${i}`);
	}
}

writeYourGenres();