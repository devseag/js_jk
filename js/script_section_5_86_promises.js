'use strict';

// console.log('Data request...');

// // const req = new Promise(function(resolve, reject){
// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Data preparing...');
	
// 		const product = {
// 			name: 'TV',
// 			price: 2000
// 		};
	
// 		resolve(product);
// 	}, 2000);
// });

// // req.then((product) => {
// // 	// console.log('Data is ready');
// // 	setTimeout(() => {
// // 		product.status = 'order';
// // 		console.log(product);
// // 	}, 2000);
// // });

// // req.then((product) => {
// // 	const req2 = new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			product.status = 'order';
// // 			resolve(product);
// // 		}, 2000);
// // 	});

// // 	req2.then(data => {
// // 		console.log(data);
// // 	});
// // });

// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'order';
// 			resolve(product);
// 			// reject();
// 		}, 2000);
// 	}).then(data => {
// 		data.modify = true;
// 		return data;
// 	}).then((data) => {
// 		console.log(data);
// 	});
// }).catch(() =>{
// 	console.error('Error!!!');
// }).finally(() => {
// 	console.log('Finally');
// });




// setTimeout(() => {
// 	console.log('Data preparing...');

// 	const product = {
// 		name: 'TV',
// 		price: 2000
// 	};

// 	setTimeout(() => {
// 		product.status = 'order';
// 		console.log(product);
// 	}, 2000);
// }, 2000);

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
// 	console.log('All');
// });

Promise.race([test(1000), test(5000)]).then(() => {
	console.log('All');
});




const p1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'one');
});
const p2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, 'two');
});
const p3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'three');
});
const p4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 4000, 'four');
});
const p5 = new Promise((resolve, reject) => {
	reject('reject');
});
   
Promise.all([p1, p2, p3, p4, p5]).then(value => {
	console.log(value);
}, reason => {
	console.log(reason); // reject
}
);