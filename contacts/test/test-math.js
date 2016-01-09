var math = require('../modules/math');

exports.test_add = function(test){
	test.equals(math.add(2,3),5);
	test.done();
};