'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films you already watched?','');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films you already watched?','');
        }
    },
    rememberMyFilms: function() {
        for ( let i =0; i < 2; i++) {
            const a = prompt('Tell me the last movie you have watched','').trim(),
                  b = prompt('How good was that?','');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if( personalMovieDB.count < 10) {
            console.log('Just a few movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Too classic');
        } else if (personalMovieDB.count >= 30) {
            console.log('Nice!');
        } else {
            console.log('Error');
        }
    },
    showMyDb : function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function() {
        personalMovieDB['privat'] === false ? personalMovieDB['privat'] = true : personalMovieDB['privat'] = false;
    },
    writeYourGenres: function() {
        for ( let i = 1; i < 2; i++) {
            // let genre = prompt(`Your fav genre with number ${i}`);

            // if (genre != null && genre != ''){
            //     personalMovieDB.genres[i - 1] = genre;
            //     console.log('done');
            // } else {
            //     console.log('You typed incorrect data or no writing at all');
            //     i--;
            // }
            // personalMovieDB.genres[i - 1] =  prompt(`Your fav genre with number ${i}`);

            let genres = prompt('Type your fav genres using comma').toLowerCase();
            if (genres === '' && genres == null){
                console.log('You typed wrong data or nothing at all');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => console.log(`Favourite genres ${i + 1} - ${item}`));
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.showMyDb(personalMovieDB.privat);
// personalMovieDB.toogleVisibleMyDB();
// personalMovieDB.showMyDb(personalMovieDB.privat);
// personalMovieDB.toogleVisibleMyDB();
// personalMovieDB.showMyDb(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();