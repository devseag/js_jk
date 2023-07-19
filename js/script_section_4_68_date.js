'use strict';

// const now = new Date();
// const now = new Date('2020-05-01');
// const now = new Date(2020, 5, 1, 20); // 2020-06-01T
// const now = new Date(0); 
// const now = new Date(-999999999999); 
// const now = new Date();
const now = new Date('2020-05-01');
// new Date.parse('2020-05-01');

//get

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay()); // 0 6  Saturday - 6
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// console.log(now.setHours(18));
// console.log(now.setHours(18, 40));
// console.log(now.setHours(40));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Cycle has finished for ${end - start} millisecond`);