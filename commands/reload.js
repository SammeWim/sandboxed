exports.run = function(msg, CommandArguments)
{
  try{
    if(msg.author.id === "220591718158827520")
    {
      var command = CommandArguments[0];
      delete require.cache[require.resolve(`./${command}.js`)];
      msg.reply(":white_check_mark: reloaded file `" + command + ".js` in command directory!");
    }else{
      msg.reply(":x: You are not permitted to use this Command!");
    }
  }catch(e)
  {
    msg.reply("error");
    console.log(e);
  }
};
