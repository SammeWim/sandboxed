exports.run = function(msg, args, Discord)
{
  let argsExecute = args.join(" ");

  if(msg.author.id !== "220591718158827520") return msg.channel.sendMessage(":x: You are not permitted to use this Command!");
  try{
    /*eslint-disable no-unused-vars*/
    require("child_process").exec(argsExecute, (e, stdout, stderr) => {
      let embed = new Discord.RichEmbed();
      embed.setColor("#33CCCC");
      embed.setTitle("sandboxed - eval");
      embed.setDescription("```js\n" + stdout + "```");
      embed.setFooter("sandboxed - developed by lordjbs#3049");
      msg.channel.sendEmbed(embed);
    });
  }catch(e)
  {
    let embed = new Discord.RichEmbed();
    embed.setColor("#B9341B");
    embed.setTitle("sandboxed - exec - error");
    embed.setDescription("```js\n" + e + "```");
    embed.setFooter("sandboxed - developed by lordjbs#3049");
    msg.channel.sendEmbed(embed);
  }
};
