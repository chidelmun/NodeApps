var math = require('../modules/math')

exports.test_add = function(test){
	test.equals(math.add(2,2),4);
	test.done();
};

exports.test_subtract = function(test){
	test.equals(math.subtract(5,2),3);
	test.done();
};


exports.test_divide = function(test){
	test.equals(math.divide(4,2),2);
	test.done();
};


exports.test_modulo = function(test){
	test.equals(math.modulo(5,2),1);
	test.done();
};

exports.test_add = function(test){
	test.equals(math.add(1,3),4);
	test.done();
};


exports.test_subtract = function(test){
	test.equals(math.subtract(5,5),0);
	test.done();
};

exports.test_modulo = function(test){
	test.equals(math.modulo(5,5),0);
	test.done();
};

exports.test_max = function(test){
	test.equals(math.max(5,1),true);
	test.done();
};

exports.test_min = function(test){
	test.equals(math.min(1,10),true);
	test.done();
}

exports.test_min = function(test){
	test.equals(math.min(5,1),false);
	test.done();
};

exports.test_max = function(test){
	test.equals(math.max(5,9),false);
	test.done();
};

exports.test_max = function(test){
	test.equals(math.max(22,2),true);
	test.done();
};

exports.test_add = function(test){
	test.equals(math.add(9,1),10);
	test.done();
};

exports.test_subtract = function(test){
	test.equals(math.subtract(10,10),0);
	test.done();
};
exports.test_multiply = function(test){
	test.equals(math.multiply(2,3),6);
	test.done();
};
exports.test_add2 = function(test){
	test.equals(math.add2(2,3,5),true);
	test.done();
};

exports.test_multiply2 = function(test){
	test.equals(math.multiply2(2,5,9), false);
	test.done();
};

exports.multiply_func = function(test){
	test.equals(math.multiply2(2,4,8),true);
	test.done();
};

exports.test_isdivisible = function(test){
	test.equals(math.isdivisibleby(20,2),true);
	test.done();
};