'use strict';

// function User(name, age) {
// 	this.name = name;
// 	let userAge = age;

// 	this.say = function() {
// 		console.log(`User name: ${this.name}, age ${userAge}`);
// 	};
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.userAge); // undefined

// ivan.userAge = 30;
// ivan.name = 'Alex';

// ivan.say();


// function User(name, age) {
// 	this.name = name;
// 	let userAge = age;

// 	this.say = function() {
// 		console.log(`User name: ${this.name}, age ${userAge}`);
// 	};

// 	this.getAge = function() {
// 		return userAge;
// 	};

// 	this.setAge = function(age) {
// 		if(typeof age === 'number' && age > 0 && age < 110) {
// 			userAge = age;
// 		} else {
// 			console.log('Not correct age!');
// 		}
// 	};
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();

// class User {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.userAge = age;
// 	}

// 	say() {
// 		console.log(`User name: ${this.name}, age ${this.userAge}`);
// 	}

// 	getAge() {
// 		return this.userAge;
// 	}

// 	setAge(age) {
// 		if(typeof age === 'number' && age > 0 && age < 110) {
// 			this.userAge = age;
// 		} else {
// 			console.log('Not correct age!');
// 		}
// 	}
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// ivan.userAge = 99;
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();

class User {
	constructor(name, age) {
		this.name = name;
		this._age = age;
	}

	#surname = 'Musk';

	say = () => {
		console.log(`User name: ${this.name} ${this.#surname}, age ${this._age}`);
	};

	get age() {
		return this._age;
	}

	set age(age) {
		if(typeof age === 'number' && age > 0 && age < 110) {
			this._age = age;
		} else {
			console.log('Not correct age!');
		}
	}
}

const ivan = new User('Ivan', 27);
// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);
console.log(ivan.surname);

ivan.say();