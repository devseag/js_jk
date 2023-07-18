
'use strict';

// const bigint = 1234234353246237423746238642374623764237462374n;

const sameBigInt = BigInt(1234234353246237423746238642374623764237462374);

// console.log(typeof(bigint));

// console.log(5n + 1); // error
// console.log(Math.round(5n)); // error

// console.log(1n + 2n);
// console.log(5n / 2n); // 2n round up
// console.log(2n > 1); // true
// console.log(2n > 5); // false

// console.log(2n == 2);  // true
// console.log(2n === 2);  // false

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number)); // 3n
console.log(Number(bigint) + number); // 3
// console.log(+bigint + number); // error