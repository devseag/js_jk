'use strict';

// function showThis() {
// 	console.log(this);
// }

// showThis();

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}

// 	console.log(sum());
// }

// // showThis();
// showThis(4, 5);

// 2ss

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		// console.log(this);
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// };

// obj.sum();

// 3

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log(`Hello ${this.name}`);
// 	};
// }

// let ivan = new User('Ivan', 23);

// 4

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
// 	return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// 1) Ordinary function: this = window, but if 'use strict' = undefined
// 2) Context for methods - its object
// 3) this in constructor and classes - new exzemplyar for object
// 4) manual link this: call, apply, bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function() { // access to this
// 	// console.log(this);
// 	this.style.backgroundColor = 'red';
// });

// btn.addEventListener('click', () => { // undefined
// 	// console.log(this);
// 	this.style.backgroundColor = 'red';
// });

btn.addEventListener('click', (e) => { 
	// console.log(this);
	e.target.style.backgroundColor = 'red';
});


const obj = {
	num: 5,
	sayNumber: function() {
		const say = () => {
			console.log(this); // object
			console.log(this.num); // 5
		};

		say();
	}
};

obj.sayNumber();

// const double = (a) => {
// 	return a * 2;
// };

// const double = (a) => a * 2;
const double = a => a * 2;

console.log(double(4));