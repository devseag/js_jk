'use strict';

const data = [
	{
		id: 'box',
		tag: 'div'
	},
	{
		id: 'fff',
		tag: 'nav'
	},
	{
		id: 'circle',
		tag: ''
	}
];

// data.forEach((blockObj, i) => {
// 	const block = document.createElement(blockObj.tag);

// 	if (!blockObj.id) throw new Error(`In data under number ${i + 1} no id`);

// 	block.setAttribute('id', blockObj.id);
// 	document.body.append(block);
// });

try {
	data.forEach((blockObj, i) => {
		const block = document.createElement(blockObj.tag);

		if (!blockObj.id) throw new SyntaxError(`In data under number ${i + 1} no id`);

		block.setAttribute('id', blockObj.id);
		document.body.append(block);
	});
} catch (e) {
	// console.error(e.name);
	// console.log(e.name);
	if (e.name === 'SyntaError') {
		console.log(e.message);
	} else throw e;
	// console.log(e.stack);
}

const err = new Error('sdfsfsdf');
// const err = new SyntaxError('sdfsfsdf');
console.log(err.name, err.message, err.stack);