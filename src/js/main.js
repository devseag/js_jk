function myModule() {
	this.hello = function() {
		console.log('hello');
	};

	this.goodbuy = function() {
		console.log('bye');
	};
}

module.exports = myModule;