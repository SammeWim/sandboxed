exports.run = function(message, CommandArguments, Discord, client)
{
  var embed = new Discord.RichEmbed();
  embed.setColor("#33CCCC");

  embed.setTitle("Commands: ");
  embed.addField("Bot", ">>ping\n>>stats\n>>invite", true);
  embed.addField("Fun", ">>talk\n>>gif\n>>cat\n>>yesorno", true);
  embed.addField("Music", ">>play\n>>stop", true);
  embed.addField("Moderation", ">>purge", true);

  embed.setFooter("sandboxed A.1vS , Coded by @lordjbs#3049");

  message.channel.sendEmbed(embed)
}
