var Botkit = require('botkit');
var controller = Botkit.slackbot();

var bot = controller.spawn({
  token: 'xoxb-56552332006-D4XkbyvAW40JLkXBJ1NYPL9e'
});

bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }

  // close the RTM for the sake of it in 5 seconds
  setTimeout(function() {
      bot.closeRTM();
  }, 50000);
});

// give the bot something to listen for.
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});
