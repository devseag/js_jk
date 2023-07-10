'use strict';

function first() {
	//Do something
	setTimeout(function() {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();

function learnJs(lang, callback) {
	console.log(`I am learning: ${lang}`);
	callback();
}

function done() {
	console.log('I am done');
}

// learnJs('JavaScript', function () {
// 	console.log('I am done');
// });

learnJs('JavaScript', done);