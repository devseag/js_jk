function amountOfPages(summary){
	let str = '';
	let n = 0;

	for ( let i = 1; i <= summary; i++) {
		// console.log(i);
		str += i;
		if(str.length === summary) {
			n = i;
			break;
		}
	}
	// console.log(str);
	// console.log(str.length);
	return n;
}

console.log(amountOfPages(5));
console.log(amountOfPages(25));
console.log(amountOfPages(1095));
console.log(amountOfPages(185));



// 1234567891011121314151617
// 12345678910111213141516171819202122232425