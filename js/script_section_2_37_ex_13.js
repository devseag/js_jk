'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(shopMall) {
	let square = 0;
	let volume = 0;
	let str ='';
	// for ( let value of shopMall.shops) {
	// 	square += value['length'] * value['width'];
	// }
	shopMall.shops.forEach((shop) => square += shop['length'] * shop['width']);
	volume += square * shopMall.height;
	shopMall.budget - (volume * shopMall.moneyPer1m3) >= 0 ? str = 'Enough' : str = 'Not enough';
	return str;
}

console.log(isBudgetEnough(shoppingMallData));