exports.run = function(message, CommandArguments, Discord, client)
{
  var embedM = new Discord.RichEmbed();
  embedM.setColor("#33CCCC");
  embedM.setTitle("I've send you my Help!")
  message.channel.sendEmbed(embedM);
  var embed = new Discord.RichEmbed();
  embed.setColor("#33CCCC");

  embed.setTitle("sandboxed");

  embed.setDescription("Hey! Thank you for using sandboxed! Here are my Commands:\n **Commands:**");
  embed.addField("Bot [2]", ">>ping: Showes the ping of the Bot\n>>stats: Showes the Statistics of the bot!", true);
  embed.addField("Misc [2]", ">>github: Gives a info for sandboxed's Github\n>>invite: WHOA! You wanna add me?!")
  embed.addField("Fun [4]", "@sandboxed#9142 [message] - Talk with cleverbot!\n>>gif [query] - Searches after a gif on giphy.com\n>>cat - Gives you a random Cat picture.\n>>yesorno - Says Yes or No. Very easy.", true);
  embed.addField("Music [2]", ">>play <query/link> - Play's Music! \n>>stop - Stops the Music!", true);
  embed.addField("Moderation [4]", ">>purge <messages> - Deletes messages.\n>>ban @<user> - Bans a user!\n>>unban <id> - Unbans a User\n>>kick - @<user> ", true);
  embed.addField("————————————————————————", "Note: Found a bug, or you wanna have the newest infos of sandboxed? Join sandboxed's guild [Click!](https://discord.gg/ypqHAd9)")

  embed.setFooter("sandboxed vS , Coded by @lordjbs#3049");

  var user = message.author.id;
  client.users.get(user).sendEmbed(embed)
}
