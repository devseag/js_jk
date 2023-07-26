'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Enter your name');
// const ans = prompt('Enter your number');

// const reg = /n/;
// const reg = /n/i;
// const reg = /n/g;
// const reg = /n/gim;
// i 
// g
// m

// console.log(ans.search(reg));

// const reg = /n/i;
// const reg = /n/ig;
// const reg = /\d/;
// const reg = /\d/g;
// // console.log(reg.test(ans));
// console.log(ans.match(reg));


// \d digits
// w words
// \s spaces / /ig


// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, '*'));
// console.log(pass.replace(/\./g, '*'));
// console.log(pass.replace(/\\/g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));


const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i));

// \D not digits
// \W not words

// console.log(str.match(/\W/ig)); // [' ', ' ', ' ']
console.log(str.match(/\D/ig)); // ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'R', 'D']
