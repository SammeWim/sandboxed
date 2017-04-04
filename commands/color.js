exports.run = function(msg, args, Discord, client)
{
  https://projects.festive.tf/color/?color=

  let embed = new Discord.RichEmbed()
  .setTitle("Color:");
  .setThumbnail("https://projects.festive.tf/color/?color=" + args[0]);

  msg.channel.sendEmbed(embed);
}
