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

// let i = 0;
// do {
	
// 	const a = prompt('Tell me the last movie you have watched',''),
//  		  b = prompt('How good was that?','');

// 	if (a != null && b != null && a != '' && b != '' && a.length < 50){
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 		i++;
// 	} else {
// 		console.log('error');
// 		i--;
// 	}

// } while  (i < 2);

// let i = 0;
// while ( i < 2){
// 	const a = prompt('Tell me the last movie you have watched',''),
//  		  b = prompt('How good was that?','');

// 	if (a != null && b != null && a != '' && b != '' && a.length < 50){
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 		i++;
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }

if( personalMovieDB.count < 10) {
	console.log('Just a few movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Too classic');
} else if (personalMovieDB.count >= 30) {
	console.log('Nice!');
} else {
	console.log('Error');
}

console.log(personalMovieDB);

// let flag = false;

// do {
// 	for ( let i = 0; i < personalMovieDB.count; i++) {
// 		console.log('Start');
// 		console.log(i);
// 		console.log(personalMovieDB.count);
// 		let a = prompt('Tell me the last movie you have watched',''),
// 			b = prompt('How good was that?','');
// 		console.log(a);
// 		console.log(b);
// 		if (a === null || b === null || a.length === 0 || b.length === 0 || a.length > 50 )  {
// 			console.log('Break');
// 			flag = true;
// 			break;
// 		}
// 		else {
// 			personalMovieDB.movies[a] = b;
// 			console.log('Movie is stored in DB!');
// 			flag = false;
// 		}
// 	}
// 	console.log(flag);
// } while (flag);

// if( personalMovieDB.count < 10) {
// 	console.log('Just a few movies');
// } else if (personalMovieDB.count >= 10 ||  personalMovieDB.count < 30) {
// 	console.log('Too classic');
// } else if (personalMovieDB.count >= 30) {
// 	console.log('Nice!');
// } else {
// 	console.log('Error');
// }