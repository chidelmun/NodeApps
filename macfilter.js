//Simple NpdeJS application to refuse connections from flagged mac addresses.

var os = require('os')
var http = require('http')
var PORT = 9002
var MAC = '58:b0:35:75:0e:39'

server = http.createServer()

server.addListener('connection',function(req,res){
	console.log("Connection coming from Client...");
	if(MAC != os.networkInterfaces().en1[0].mac){
		console.log("Connection denied for this Mac Address :" + MAC);
	}
	else{
		MAC = os.networkInterfaces().en1[0].mac
		console.log(MAC + "Is now connected to server.")
	}
});

process.on('SIGINT', function(){
	console.log("SIGINT received");
})

server.listen(PORT);

console.log("Server running on Port " + PORT)