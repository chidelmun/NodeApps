// Load the TCP Library
net = require('net');
// Keep track of the chat clients
var clients = [];
// Start a TCP Server
net.createServer(function (socket) {
  // Identify this client
  socket.name = socket.remoteAddress + ":" + socket.remotePort 
  // Put this new client in the list
  clients.push(socket);
  // Send a nice welcome message and announce
  socket.write("You are Welcome \n");
  broadcast(socket.name + " joined the chat\n", socket);
  // Handle incoming messages from clients.
  socket.on('data', function (data) {
    socket.write("I know you are " + data.toString() + "\n");
  });
  // Remove the client from the list when it leaves
  socket.on('end', function () {
    clients.splice(clients.indexOf(socket), 1);
    broadcast(socket.name + " left the chat.\n");
  });
  // Send a message to all clients
  function broadcast(message, sender) {
    clients.forEach(function (client) {
      // Don't want to send it to sender
      if (client === sender) return;
      client.write(message);
    });
    // Log it to the server output too
    process.stdout.write(message)
  }
}).listen(5000);
console.log("Server started at 0.0.0.0:8888");