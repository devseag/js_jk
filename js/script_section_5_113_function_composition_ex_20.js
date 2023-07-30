'use strict';

function addFirst(a) {return a;}
// function add1(a) {return a + 1;}
function add2(a) {return a + 2;}
// const multiply20 = (price) => price * 20;
// const divide100 = (price) => price / 100;
// const normalizePrice = (price) => price.toFixed(2);

// // const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);
// const compose = function (...fns) {
//     return function (x) {
// 		console.log(x);
//         return fns.reduceRight((res, fn) => { 
// 			console.log(res);
// 			console.log(fn);
// 			return fn(res);
// 			}, x);
//     };
// };

// const discount = compose(add2, add1, addFirst);
// // const discount = compose(normalizePrice, divide100, multiply20);

// console.log(discount(200.0));
// console.log(compose(add2, add1, addFirst)(3));
// console.log(discount(compose(add2, add1, addFirst)(200.0)));

const add1 = function(a){return a + 1;};
const addAll3 = function(a,b,c){
	console.log('ABC');
	console.log(a);
	console.log(b);
	return a + b + c;
};

// const composeWithArgs = () => {};
// const composeWithArgs = function (...fns) {
// 	console.log(fns);
//         return fns.reduceRight((res, fn, index) => { 
// 			console.log(index);
// 			return function(...args) {
// 				return fn(res(...args));
// 			};
// 			});
// };

const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));

composeWithArgs(addFirst, add2, add1,addAll3)(1,2,3);
console.log('ADD');
console.log((addAll3)(1,2,3));






















// {return args.reduceRight(function(prev, curr) { return curr(prev);} );};
// console.log(compose(add2, add1, addFirst(1)));
	// console.log(typeof(curr));
	// console.log(typeof(prev));
	// console.log(curr);
	// console.log(prev);
	// return curr(prev);
	// if(typeof(prev) === 'number') {
	// 	console.log('Number');
	// 	return curr(prev);
	// }
	// else {
	// 	console.log('START');
	// 	console.log(curr);
	// 	console.log(prev);
	// 	console.log('INDEX ' + index);
	// 	return prev(curr);
	// }
// 	});
// };


// TypeError: function add2(a) {return a + 2;}1 is not a function (evaluating 'compose(add2, add1, addFirst)(3)') in file:///eval/test/evaluate.js (line 10)
// TypeError: function addFirst(a) {return a;}1 is not a function (evaluating 'compose(add1, addFirst)(1)') in file:///eval/test/evaluate.js (line 7)
















// console.log(compose(add1, addFirst, addSecond));
// console.log(compose(add2, add1, addFirst));
























// const compose = (...args) => {

//     return args.reduceRight(function(prev, curr, index, args) {
// 		// console.log(index);
// 		// console.log('PREV');
// 		// console.log(prev);
// 		// console.log('CURR');		
// 		// console.log(curr);
// 		// console.log('ARGS');
// 		// console.log(args);	
// 		return curr(prev);	
// 	});
// };

// const multiply20 = (price) => price * 20;
// const divide100 = (price) => price / 100;
// const normalizePrice = (price) => price.toFixed(2);

// compose(normalizePrice(divide100(multiply20(200))));
// const discount = compose(normalizePrice, divide100, multiply20, 200);
// const discount = function(func, num) {
// 	console.log(func, num);
// };
// console.log('END');
// console.log(discount);
// discount(compose(normalizePrice, divide100, multiply20), 200.0);