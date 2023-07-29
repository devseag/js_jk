'use strict';

// function* generator() {
// 	// function *generator() {
// 	yield 'S';
// 	yield 'c';
// 	yield 'r';
// 	yield 'i';
// 	yield 'p';
// 	yield 't';
// }

// const str = generator();

// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());//{ value: 'p', done: false }
// // console.log(str.next());// { value: 't', done: false }
// // console.log(str.next());// { value: undefined, done: true }

// console.log(str.next().value);

function* count(n) {
	for (let i = 0; i < n; i++) {
		yield i;
	}
}

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

for (let k of count(7)) {
	console.log(k);
}