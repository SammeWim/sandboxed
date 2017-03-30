var config = require("../sandboxed.js").config;

const CleverBot = require("cleverbot.io"),
  CleverBotClient =  new CleverBot(config.cleverbotUser, config.cleverbotToken);

CleverBotClient.setNick("sandboxed");

CleverBotClient.create(function (err, session){
  console.log("Created/ing CleverBotClient! function> | session: "+ session);
});

exports.run = function(msg, args)
{
  var askVariable = args.join(" ");
  CleverBotClient.ask(askVariable, function (err, response) {
    msg.channel.sendMessage(":speech_balloon: " + response);
  });
};
