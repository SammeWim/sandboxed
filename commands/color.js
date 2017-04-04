exports.run = async function(msg, args, Discord, client)
{
  https://projects.festive.tf/color/?color=

  if(args[0].includes("#")) await msg.reply("Dont use `#`'s!")
  let embed = new Discord.RichEmbed().setTitle("Color:").setThumbnail("https://projects.festive.tf/color/?color=" + args[0]);

  await msg.channel.sendEmbed(embed);
}
