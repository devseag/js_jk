function firstTask() {
	for ( let i = 5; i < 11; i++) {
		console.log(i);
	}
}

function secondTask() {
	for ( let i = 20; i > 10; i--) {
		if ( i === 13) {
			break;
		}
		console.log(i);
	}
}

function thirdTask() {
	for ( let i = 2; i < 11; i+= 2) {
		console.log(i);
	}
}

function fourthTask() {
	let i = 2;
	while ( i <= 16 ) {
		if ( i % 2 === 0) {
			i++;
			continue;
		} else {
			console.log(i);
			i++;
		}
	}
}

function fifthTask() {
	const arrayOfNumbers = [];
	for ( let i = 5; i <= 10; i++) {
		arrayOfNumbers[i-5] = i;
		console.log(arrayOfNumbers[i-5]);
	}
	console.log(arrayOfNumbers);
	return arrayOfNumbers;
}

console.log(fifthTask());