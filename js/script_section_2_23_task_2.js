function firstTagsk() {
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	for ( let i = 0; i < arr.length; i++) {
		result[i] = arr[i];
	}

	console.log(arr);
	console.log(result);

	return result;
}

firstTagsk();

function secondTask() {
	const data = [5, 10, 'Shopping', 20, 'Homework'];

	 for ( let i =0; i < data.length; i++) {
	// 	if ( typeof(data[i]) === 'string') {
	// 		data[i] = data[i] + ' Done';
	// 	} else if (typeof(data[i]) === 'number') {
	// 		data[i] = data[i]*2;
	// 	}
		typeof(data[i]) === 'string' ? data[i] = data[i] + ' Done' : data[i] = data[i]*2;
	}

	console.log(data);

	return data;
}

secondTask();

function thirdTask() {
	const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

	for ( let i = 1; i <= data.length; i++) {
		result[i - 1] = data[data.length - i ];
	}

	console.log(data);
	console.log(result);

	return data;
}

thirdTask();