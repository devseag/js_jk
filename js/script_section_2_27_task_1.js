function sayHello(name) {
	return 'Hello, ' + name;
}

console.log(sayHello('Artem'));

function returnNeighboringNumbers(num) {
	return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));

function getMathResult(num1,num2) {
	let res = num1;
	if ( typeof(num2) === 'number' && num2 > 0) {
		for (let i = 2; i <= num2; i++) {
			res += '---' + num1 * i;
		}
	}
	return res;
}

console.log(getMathResult(5, 3));
console.log(getMathResult(3, 10));
console.log(getMathResult(10, 5));
console.log(getMathResult(10, '5'));
console.log(getMathResult(10, 0));
console.log(getMathResult(20, -5));