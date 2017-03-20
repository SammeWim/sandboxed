const BoatCFG = require("./BoatCFG/BoatCFG.js");

exports.run = function (msg, CommandArguments, Discord, client)
{
  if(msg.author.id !== BoatCFG.botOwner)
  {
    msg.channel.sendMessage("`:x:` You are not permitted to use this Command!");
  }else{
    if(CommandArguments === "logconfig")
    {
      BoatCFG.getBoatCFG(msg, client);
    }
  }
}
