'use strict';

// let x = 5; alert( ++x ); // 6
// console.log(x); //6
// let y = 5; alert( y++ ); //5
// console.log(y); // 6

// console.log(typeof([ ])); // ''
// console.log(typeof([ ] + false)); // '' + false -> string
// console.log(typeof([ ] + false - null)); // NaN
// console.log([ ] + false - null + true);

// let y = 1; let x = y = 2; alert(x);

// console.log(typeof(1 + 2));
// console.log([ ] + 1 + 2); //'12'

// console.log(( '1'[0] )); // 1
// alert( '1'[0] ); // 1

// console.log(2 && 1); // 1
// console.log(2 && 1 && null); // null
// console.log(2 && 1 && null && 0);  // null
// console.log(2 && 1 && null && 0 && undefined); // null
// && stop when lie, ili on truth

// console.log(!!( 1 && 2 )); // true
// console.log(1 && 2); // 2
// console.log(!!( 1 && 2 ) === 1 && 2);

// console.log( null || 2 && 3 || 4 ); // 3
// alert( null || 2 && 3 || 4 ); // 3

// const a = [1, 2, 3]; 
// const b = [1, 2, 3];

// console.log(a == b);


// console.log(+'Infinity'); // infinity - number
// alert( +'Infinity' ); // infinity - number

// console.log('Cat' > 'lemon'); // false
// console.log('Cat' > 'cat'); // false
// console.log('Ca' > 'cA'); // false

console.log(0 || '' || 2 || undefined || true || false);