var Botkit = require('botkit');
var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

var bot = controller.spawn({
  token: process.env.slack_token,
  debug: true
}).startRTM(function(err, bot, payload) {
  console.log(process.env.PORT);
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

//prepare the webhook
controller.setupWebserver(process.env.PORT || 3000, function(err, webserver) {
  console.log(webserver);
});

// close the bot connection
controller.hears('bye bye timesheet', ['direct_message'],function(bot, message) {

  bot.reply(message,'Hello yourself.');
  bot.closeRTM();

});
