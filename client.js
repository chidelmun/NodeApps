var net = require('net');
PORT = 9999;
conn = net.createConnection(PORT, ()=>{
	console.log("Connected\n");
});

conn.write('Here is data sent from client');
