var http = require('http');
PORT = 8888;

app = http.createServer(function(req,res){
	res.writeHead(200,{"content-Type":"text/html",
						'content-length':'123',
						'connection':'keep-alive'});
	res.write("Hello World \n");
	if(res.statusCode != 200){
		console.log("Bad Response");
	}else
	console.log("Valid request");

}).listen(PORT);

app.on('connect', function(req,res,head){
	console.log("Client connected \n");
});

console.log(__filename);
console.log("Server running on port " + PORT);