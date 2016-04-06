var irc = require('irc');
var bot = new irc.Client('chat.freenode.net', process.env.OPENSHIFT_APP_NAME || 'gdgbueabot', {
    channels: ['#ublab', '#chickserver'],
    port: 8001,
    debug: true
});

bot.addListener("join", function(channel, who) {
	// Welcome them in!
	bot.say(channel, "Welcome " + who + " Please fill the form at http://goo.gl/forms/WIPyrU7uXW" );
	bot.say(channel, who + " Do you know @smcon is coming up soon? Follow us on Twitter at @smcon2016");
});

bot.addListener('message', function(from, to, message) {
    if(  message.indexOf('Know any good jokes?') > -1
      || message.indexOf('good joke') > -1
    ) {
        bot.say(to, 'Knock knock!');
    }
});

bot.addListener('message', function(from, to, message) {
    if(  message.indexOf('who is there?') > -1
      || message.indexOf("who's there?") > -1
      || message.indexOf("Who's there?") > -1
      || message.indexOf("Who is there?") > -1
      )
    {
        bot.say(to, 'CHICK_BOT');
    }
});
bot.addListener('message', function(from, to, message) {
    if(  message.indexOf('CHICK_BOT who?') > -1
      || message.indexOf("doris who?") > -1
     )
    {
        bot.say(to, "CHICK_BOT locked, that's why I'm knocking!");
    }
});