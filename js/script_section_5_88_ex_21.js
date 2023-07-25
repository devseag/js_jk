const funds = [
	// {amount: 1400},
	// {amount: 2400},
	// {amount: 1000},
	// {amount: 500},
	// {amount: 10400},
	// {amount: 11400}
	{amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
	// return data.filter(fund => fund.amount > 0)
	// 	.reduce((acc, curr) => typeof(acc) === 'object' ? acc.amount + curr.amount : acc + curr.amount);
	return data.filter(fund => fund.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);		
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
	// return data.some(item => item.amount < 0) 
	// 	? data.reduce((acc, curr) => typeof(acc) === 'object' ? acc.amount + curr.amount : acc + curr.amount) 
	// 	: getPositiveIncomeAmount(data);
	return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);	
};

console.log(getTotalIncomeAmount(funds));