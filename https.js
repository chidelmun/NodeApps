var https = require('http')
var PORT = 9000
var no_requests = 1
https.createServer(function(req,res){

	console.log("Incoming client request" + no_requests);
	no_requests++
	res.on('data',function(data){
		process.stdout.write(data);
	})

}).listen(PORT);

console.log("Server running on Port " + PORT);