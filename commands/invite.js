exports.run = function (msg, CommandArguments, Discord, client)
{
  var embed = new Discord.RichEmbed(); 
  embed.setColor("#33CCCC");

  embed.addField("Invite", "[Click Here!](https://discordapp.com/oauth2/authorize?client_id=279725066789322752&scope=bot&permissions=8198)", true);
  embed.addField("Join Help Server!", "[Click Here!](https://discord.gg/ypqHAd9)", true)

  msg.channel.sendEmbed(embed);
}
