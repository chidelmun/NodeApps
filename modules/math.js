exports.add = function(x,y){
	return x+y;
};


exports.subtract = function(x,y){
	return x-y;
};


exports.divide = function(x,y){
	return x/y;
};


exports.modulo = function(x,y){
	return x%y;
};

exports.max = function(x,y){
	return x > y == true;
};

exports.min = function(x,y){
	return x<y == true;
}

exports.multiply = function(x,y){
	return x*y;
};

exports.add2 = function(x,y,z){
	return (x+y == z) == true;
};

exports.multiply2 = function(x,y,z){
	return (x*y == z) == true;
}