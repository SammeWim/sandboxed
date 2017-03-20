const BoatCFGConfig = require("./BoatCFG.json");
const DiscordDebug = require(".../DiscordDebug.js")

exports.getBoatCFG = function(msg, client)
{
    DiscordDebug.log(BoatCFG.toString(), msg, client);
}

exports.botOwner = BoatCFGConfig.BotOwner;
