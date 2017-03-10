exports.run = function (msg, CommandArguments, Discord, client)
{
  let embed = new Discord.RichEmbed();
  embed.setColor("#33CCCC");

  embed.addField("Invite", "https://goo.gl/OsooWD", true);
  embed.addField("Join Help Server!", "https://discord.gg/ypqHAd9", true)

  msg.channel.sendEmbed(embed);
}
