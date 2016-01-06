var math = require('../modules/math')

exports.test_add = function(test){
	test.equals(math.add(2,2),4);
	test.done();
};

exports.test_subtract = function(test){
	test.equals(math.subtract(5,2),3);
	test.done();
};