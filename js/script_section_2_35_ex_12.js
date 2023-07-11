'use strict';

const someString = 'This is some strange string';

function revers(str) {
	return typeof(str) != 'string' ?  'Error' :  str.split('').reverse().join('');
	// let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

console.log(revers(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const baseCurrencies = [];
// const additionalCurrencies = [];

function availableCurr(arr1, noCurr) {
    let str = '';
	// if (arr1.length === 0) return 'No available currency'
    arr1.length === 0 ? str = 'No available currency' : str = 'Avalabile currencies: \n';
    arr1.forEach(element => { if(element != noCurr) str += `${element}\n`;});
    // arr1.forEach(function(element, i) { if(element != noCurr) str += `${element}\n`;});
    // else {
        // for ( let i = 0; i < arr1.length; i++) {
        //     if(arr1[i] === noCurr) arr1.splice(i,1);
        //     else {
        //         str += `\n ${arr1[i]}`;
        //     }
        // }
        // arr1.forEach(function(element, i) { 
        //     if( element === noCurr) arr1.splice(element, i)
        //     else {
        //     str += `\n ${element}`;
        //     }
        // });
    // }
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));