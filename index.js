var http = require('http')
var PORT = 9000
server = http.createServer()

server.on('connection',function(req,res){
	console.log("Server Running on port " + PORT);
});
server.listen(PORT);

