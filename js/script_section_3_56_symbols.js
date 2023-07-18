'use strict';

// let id = Symbol('id');

// const obj = {
// 	'name': 'Test',
// 	[Symbol('id')]: 1
// };
// const obj = {
// 	'name': 'Test',
// 	// [id]: 1,
// 	[Symbol('id')]: 1,
// 	// getId: function() {
// 	// 	return this[id];
// 	// }
// };

// let id = Symbol('id');
// let id = Symbol();
// let id = Symbol('id');
// let id2 = Symbol('id');

// console.log(id == id2); // false

// obj[id] = 1;

// console.log(obj[id]);
// console.log(obj['id']); // undefined
// console.log(obj);
// console.log(obj.getId());
// console.log(Object.getOwnPropertySymbols(obj));
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// console.log(obj[id]);

// for ( let value in obj) console.log(value);

// const myAwesomeDB = {
// 	movies: [],
// 	actors: [],
// 	// id: 123
// 	[Symbol('id')]: 123,
// };
const myAwesomeDB = {
	movies: [],
	actors: [],
	// id: 123
	[Symbol.for('id')]: 123,
};

// external code

myAwesomeDB.id = '23432423';

// console.log(myAwesomeDB['id']);
console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);