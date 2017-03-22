exports.run = function(msg, CommandArguments, Discord, client)
{
  try{
    if(msg.author.id === "220591718158827520")
    {
      msg.channel.sendMessage("Rebooting!");

      setInterval( () => process.exit(0), 1000);
    }else{
      msg.reply(":x: You are not permitted to use this Command!");
    }
  }catch(e)
  {
    msg.reply("error")
    console.log(e)
  }
}
