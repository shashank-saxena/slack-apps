var Botkit = require('botkit');
var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

var bot = controller.spawn({
  token: process.env.slack_token
}).startRTM(function(err, bot, payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

// close the bot connection
controller.hears('bye bye timesheet', ['direct_message'],function(bot, message) {

  bot.reply(message,'Hello yourself.');
  bot.closeRTM();

});
