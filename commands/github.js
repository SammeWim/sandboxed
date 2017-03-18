exports.run = function(msg, CommandArguments, Discord, client)
{
  var embed = new Discord.RichEmbed();
  embed.setColor("#33CCCC");

  embed.setTitle("sandboxed: ");
  embed.addField("Open Source?!", "Yes. I decided to make the bot Open Source, so everyone can see and do their own stuff with sandboxed!", true);
  embed.addField("Github!", "[Click Here](https://github.com/lordjbs/sandboxed)")


  embed.setFooter("sandboxed A.1vS , Coded by @lordjbs#3049");

  message.channel.sendEmbed(embed)
}
