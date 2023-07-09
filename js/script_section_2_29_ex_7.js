function calculateVolumeAndArea(num) {
	if ( typeof(num) == 'number' && num > 0  && Number.isInteger(num)) {
		return `Cube volume: ${num * num * num} , square: ${6 * num * num}` ;
	} else {
		return 'Not possible to calculate';
	}
}

console.log(calculateVolumeAndArea(-1));
console.log(calculateVolumeAndArea(2));
console.log(calculateVolumeAndArea(2.2));

function getCoupeNumber(num) {
	if( isNaN(num) || num < 0 || !Number.isInteger(num)) {
		return 'Error! No places with this number';
	} else if (num === 0 || num > 36) {
		return 'The place with this number does not exist';
	} 
	return Math.ceil(num / 4 );
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));