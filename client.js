var net = require('net');
PORT = 5000;
conn = net.createConnection(PORT, ()=>{
	console.log("Connected\n");
})