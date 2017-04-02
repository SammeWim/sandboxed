exports.run = function(message, CommandArguments, Discord)
{
  var embedM = new Discord.RichEmbed();
  embedM.setColor("#33CCCC");
  embedM.setTitle("Help is coming!");
  message.channel.sendEmbed(embedM);
  var embed = new Discord.RichEmbed();
  embed.setColor("#33CCCC");

  embed.setTitle("sandboxed");

  embed.setDescription("Hey! Thank you for using sandboxed! Here are my Commands:\n **Commands:**");
  embed.addField("Bot [2]", ">>ping: Shows the Bot's ping.\n>>stats: Shows the Statistics of the bot!", true);
  embed.addField("Misc [2]", ">>github: Gives a info on sandboxed's Github\n>>invite: WHOA! You wanna add me?!", true);
  embed.addField("Fun [4]", ">>talk <talk> - Talk with cleverbot!\n>>gif [query] - Searches after a gif on giphy.com\n>>cat - Gives you a random Cat picture.\n>>yesorno - Says Yes or No. Very easy.", true);
  embed.addField("Search [1]", ">>ytsearch <query> - Search on youtube (buggy af)", true);
  embed.addField("Music [2]", ">>play <query/link> - Play's Music! \n>>stop - Stops the Music!", true);
  embed.addField("Moderation [4]", ">>purge <messages> - Deletes messages.\n>>ban @<user> - Bans a user!\n>>unban <id> - Unbans a User\n>>kick - @<user> ", true);
  embed.addField("————————————————————————", "Note: Found a bug, or you wanna all the latest news about sandboxed? Join sandboxed's guild [Click!](https://discord.gg/ypqHAd9)", true);

  embed.setFooter("sandboxed vS , Coded by @lordjbs#3049");

  message.author.sendEmbed(embed);
};
