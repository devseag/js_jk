'use strict';

// const obj = new Object();
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() {
		console.log('Test');
	}
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(options.name);
// delete options.name;
// console.log(options);
// console.log(options['colors']['border']);

// let counter = 0;
// for (let key in options) {
// 	counter++;
// 	if (typeof(options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Property ${i} has value ${options[key][i]}`);
// 			//counter++;
// 		}
// 	} else {
// 		console.log(`Property ${key} has value ${options[key]}`);
// 		//counter++;
// 	}
// }
// console.log(counter);

// console.log(Object.keys(options).length);