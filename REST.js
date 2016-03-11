var http = require('http')
var PORT = 9006

function handle_GET_request(req, res){
	//console.log("GET request received")
	console.log(req.url);
	console.log({name:'Dario',height:'1,79',address:'Buea'});
	
}

function handle_POST_request(req,res){
	console.log("POST request received")
}

function handle_PUT_request(req,res){
	console.log("PUT request received")
}

function handle_DELETE_request(req,res){
	console.log("DELETE request received")
}

function handle_BAD_request(req,res){
	console.log("BAD request received")
}

function request_handler(req,res){
	switch(req.method){
		case 'GET':
			handle_GET_request(req,res);
			break;

		case 'POST':
			handle_POST_request(req,res);
			break;

		case 'PUT':
			handle_PUT_request(req,res);
			break;

		case 'DELETE':
			handle_DELETE_request(req,res);
			break;

		default:
			handle_BAD_request(req,res);
			break;

	}
}

var server = http.createServer(request_handler);

server.listen(PORT);





