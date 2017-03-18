exports.run = function(msg, CommandArguments, Discord, client)
{

  var embed = new Discord.RichEmbed();
  embed.setColor("#33CCCC");

  embed.setTitle("sandboxed: ");
  embed.addField("Open Source?!", "Yes. I decided to make the bot Open Source, so everyone can see and do their own stuff with sandboxed, and also, help in developing, and maybe make some new commands, that will come in the main bot!", true);
  embed.addField("Github!", "[Click Here](https://github.com/lordjbs/sandboxed)")


  embed.setFooter("sandboxed A.1vS , Coded by @lordjbs#3049");

  msg.channel.sendEmbed(embed)
}
