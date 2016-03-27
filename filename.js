var http = require('http');
PORT = 8888;

app = http.createServer((req,res)=>{
	res.writeHead(200,{"content-Type":"text/html",
						'content-length':'123',
						'connection':'keep-alive'});
	res.write("Hello World \n");
	if(res.statusCode != 200){
		console.log("Bad Response");
	}else
	console.log("Valid request");

}).listen(PORT);

console.log(__filename);
console.log("Server running on port " + PORT);