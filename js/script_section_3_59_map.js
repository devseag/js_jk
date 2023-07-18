
'use strict';

// const user = {
// 	4: 'Alex',
// 	surname: 'Smith',
// 	birthday: '20/04/1993',
// 	showMyPublicData: function() {
// 		console.log(`${this.name} ${this.surname}`);
// 	}
// };

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '20/04/1993',
	showMyPublicData: function() {
		console.log(`${this.name} ${this.surname}`);
	}
};

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

// console.log(user);
// console.log(typeof(Object.keys(user)[0]));

const shops = [
	{rice: 500},
	{oild: 200},
	{bread: 50}
];

const budget = [5000, 15000, 25000];

// const map = new Map();
const map = new Map([
	[{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
	map.set(shop, budget[i]);
});

// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);
// map.set(shops[0], 5000)
// 	.set(shops[1], 15000)
// 	.set(shops[2], 25000);

console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;

// map.keys()
// console.log(map.keys());
// const goods = [];
// for ( let shop of map.keys()) {
// 	// console.log(shop);
// 	goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
// 	console.log(price);
// }

// for (let [shop, price] of map.entries()) {
// 	console.log(price, shop);
// }

// map.forEach((value, key, map) => {
// 	console.log(key, value);
// });