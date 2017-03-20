const BoatCFGConfig = require("./BoatCFG.json");
const DiscordDebug = require("../CommandWrapper.js").sandboxed.DiscordDebug;

exports.getBoatCFG = function(msg, client)
{
    DiscordDebug.log(BoatCFG.toString(), msg, client).catch(() => console.error);
}

exports.botOwner = BoatCFGConfig.BotOwner;
