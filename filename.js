var http = require('http');
PORT = 8888;

http.createServer(function(req,res){
	res.writeHead(200,{"content-Type":"text/html"});
	res.write("Hello World \n");
	
}).listen(PORT);
console.log(__filename);
console.log("Server running on port " + PORT);