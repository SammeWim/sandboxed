exports.run = function(msg, argszz, Discord, client)
{
  let args = msg.content.split(" ").slice(1);

  require("child_process").exec("python3 " + args.join(" "), (e, stdout) => {
    let embed = new Discord.RichEmbed();
    embed.setColor("#33CCCC");
    embed.setTitle("sandboxed - pyeval");
    embed.setDescription("```\n" + stdout + "```");
    embed.setFooter("sandboxed - developed by lordjbs#3049");
    msg.channel.sendEmbed(embed);
  })
};
