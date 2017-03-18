var config = require("../sandboxed.js").publicConfig;
const CleverBot = require("cleverbot.io"),
CleverBotClient =  new CleverBot(config.talk1, config.talk2);

CleverBotClient.setNick("sandboxed");
CleverBotClient.create(function (err, session){
    console.log("Created/ing CleverBotClient! function> | session: "+ session);
})

exports.run = function(msg, args, Discord, client)
{
    CleverBotClient.ask(args, function (err, response) {
        msg.channel.sendMessage(":speech_balloon: " + response);
    })
}
