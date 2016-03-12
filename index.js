var irc = require('irc')

var client = new irc.Client('irc.freenode.net', 'CHICK_BOT', {
    channels: ['#ublab'],
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
    // client.say('#ublab', "I am fine thanks.");
     client.say('#ublab', "Bye " + from);
	
});

client.addListener('pm', function (from, message) {
    console.log(from + ' => ME: ' + message);
});

client.addListener('message#ublab', function (from, message) {
    console.log(from + ' => #ublab: ' + message);
});