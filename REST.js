var http = require('http')
var PORT = 9005

function handle_GET_request(res){
	console.log("GET request received")
}

function handle_POST_request(res){
	console.log("POST request received")
}

function handle_PUT_request(res){
	console.log("PUT request received")
}

function handle_DELETE_request(res){
	console.log("DELETE request received")
}


function request_handler(req,res){
	switch(req.method){
		case 'GET':
			handle_GET_request(res);
			break;

		case 'POST':
			handle_POST_request(res);
			break;

		case 'PUT':
			handle_PUT_request(res);
			break;
		case 'DELETE':
			handle_DELETE_request(res);
			break;
		
	}
}
