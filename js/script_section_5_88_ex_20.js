const films = [
	{
		name: 'Titanic',
		rating: 9
	},
	{
		name: 'Die hard 5',
		rating: 5
	},
	{
		name: 'Matrix',
		rating: 8
	},
	{
		name: 'Some bad film',
		rating: 4
	}
];

// function showGoodFilms(arr) {
// 	return arr.filter(film  => film .rating >= 8);
// }

// console.log(showGoodFilms(films));

// function showListOfFilms(arr) {
// 	return arr.reduce( (acc, curr) => 
// 		`${typeof(acc) === 'object'? acc.name : acc}, ${curr.name}`
// 	);
// }

// console.log(showListOfFilms(films));

function setFilmsIds(arr) {
	return arr.map((item, index) => { item.id = index; return item;});
	// return arr;
}

// console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

// console.log(tranformedArray);

function checkFilms(arr) {
// console.log(arr);
	// return arr.every(item => item.id === 0 || item.id ? true : false );
	return arr.every(item => Object.hasOwn(item, 'id') );
	// console.log(tranformedArray.every(item => item.id != 'undefined'));
	// console.log(tranformedArray);	
}
// checkFilms(tranformedArray);
console.log(checkFilms(tranformedArray));

// function showListOfFilms(arr) {
// 	const listOfFilms = arr.reduce(function(accumulator, current, index){
// 		console.log('Start');
// 		console.log(accumulator);
// 		console.log(current.name);
// 		console.log(index);
// 		console.log('End');
// 		if ((accumulator!= '')) {
// 			console.log('Start 3');
// 			console.log(accumulator);
// 			console.log(current.name);
// 			accumulator = accumulator +', ' + current.name;
// 			console.log(accumulator);
// 			console.log('End 3');
// 			return accumulator;
// 		} else {
// 			console.log('Start 2');
// 			console.log(current.name);
// 			accumulator = current.name;
// 			console.log(accumulator);
// 			console.log('End 2');
// 			return accumulator;
// 		}
// 	}, '');
// }

// function showListOfFilms(arr) {
// 	const listOfFilms = arr.reduce(function(accumulator, current, index){
// 		console.log('Start');
// 		console.log(accumulator);
// 		console.log(typeof(accumulator));
// 		console.log(current.name);
// 		console.log(index);
// 		console.log('End');
// 		if (typeof(accumulator) === 'string' ) {
// 			console.log('Start 3');
// 			console.log(accumulator);
// 			console.log(current.name);
// 			accumulator = accumulator +', ' + current.name;
// 			console.log(accumulator);
// 			console.log('End 3');
// 			return accumulator;
// 		} else {
// 			console.log('Start 2');
// 			console.log(current.name);
// 			accumulator = accumulator.name +', ' + current.name;
// 			console.log(accumulator);
// 			console.log('End 2');
// 			return accumulator;
// 		}
// 	});

// 	return listOfFilms;
// }

// if (typeof(accumulator) === 'string' ) {
// 	accumulator = accumulator +', ' + current.name;
// 	return accumulator;
// } else {
// 	accumulator = accumulator.name +', ' + current.name;
// 	return accumulator;
// }

// function showListOfFilms(arr) {
// 	// const listOfFilms = arr.reduce(function(accumulator, current){
// 	// 	return typeof(accumulator) === 'string' ? accumulator = accumulator +', ' + current.name : accumulator = accumulator.name +', ' + current.name;
// 	// });

// 	// const listOfFilms = arr.reduce( (accumulator, current) => {
// 	// 	return typeof(accumulator) === 'string' ? accumulator = accumulator +', ' + current.name : accumulator = accumulator.name +', ' + current.name;
// 	// });

// 	// return listOfFilms;
// 	return arr.reduce( (accumulator, current) => {
// 			return typeof(accumulator) === 'string' ? accumulator = accumulator +', ' + current.name : accumulator = accumulator.name +', ' + current.name;
// 		});
// }

// function showListOfFilms(arr) {
// 	return arr.reduce( (accumulator, current) => {
// 		return typeof(accumulator) === 'string' ? accumulator = accumulator +', ' + current.name : accumulator = accumulator.name +', ' + current.name;
// 	});
// }

// function showListOfFilms(arr) {
// 	return arr.reduce( (acc, curr) => 
// 		// return typeof(acc) === 'object'? acc = acc.name +', ' + curr.name : acc = acc +', ' + curr.name;
// 		// typeof(acc) === 'object'? `${acc.name}, ${curr.name}` : `${acc}, ${curr.name}`
// 		typeof(acc) === 'object'? acc.name + ', '+ curr.name : acc + ', ' + curr.name
// 	);
// }

