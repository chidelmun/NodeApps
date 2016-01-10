var math = require('../modules/math');

exports.test_add = function(test){
	test.equals(math.add(2,3),5);
	test.done();
};

exports.test_subtract = function(test){
	test.equals(math.subtract(4,2),2);
	test.done();
};

exports.test_multiply = function(test){
	test.equals(math.multiply(3,2),6);
	test.done();
};


