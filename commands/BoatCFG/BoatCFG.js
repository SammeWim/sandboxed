const BoatCFGConfig = require("./BoatCFG.json");
const DiscordDebug = require("../CommandWrapper.js").sandboxed.DiscordDebug;

exports.getBoatCFG = function(msg, client)
{
    DiscordDebug.log(BoatCFG.toString(), msg, client);
}

exports.botOwner = BoatCFGConfig.BotOwner;
