'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(fam) {
	let str = '';
	fam.length === 0 ? str = 'Family is empty' : str = 'Family consist of: ';
	// let str = 'Family consist of: ';
	// if(fam.length === 0) return 'Family is empty'
	// else {
	// 	// for (let value of fam) {
	// 	// 	str += `${value} `;
	// 	// }
	fam.forEach(member => {
		str += `${member} `;
	});
	return str;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(city) {
	// city.forEach(function(city) {
	// 	console.log(`${city.toLowerCase()}`);
	// });
	city.forEach(city => {
		console.log(city.toLowerCase());
	});
}

standardizeStrings(favoriteCities);