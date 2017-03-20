exports.log = function(LogMessage, msg, dClient)
{
  console.log("DiscordDebug =>" + LogMessage);

  const debugChannel = dClient.guilds.get("288608465285545994").channels.get("292740811899273226");

  debugChannel.sendMessage("DiscordDebug => " + LogMessage);
}
