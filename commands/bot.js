const sandboxed = require("../sandboxed.js");

exports.run = function(msg, CommandArguments, Discord, client)
{
  if(msg.author.id !== "220591718158827520") return msg.channel.sendMessage(":x: You are not permitted to use this Command!");

  console.log("workin")
  if(CommandArguments[0].toLowerCase() === "serverinfo")
  {
    if(CommandArguments[1].length < 1) return msg.channel.sendMessage("Wut? You'll need the id, ya know?");

    let guild = client.guilds.get(CommandArguments[1]);

    let users = guild.users.length;
    let bots = guild.users.map(r => r.user.bot).length;

    let owner = guild.owner.displayName + " ( " + guild.owner.id + ")";

    let name = guild.name + " (" + guild.id + ")";

    let botfarm;
    if(bots > users) botfarm = "Maybe a botfarm!"; else botfarm = "Not a botfarm!";
    msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle("Guild info: ")
    .addField("Name:", name)
    .addField("Users: " + users, true)
    .addField("Bots: " +  bots + " (" + botfarm + ")")
    .addField("Owner: " + owner);
    .setFooter(name , guild.iconURL))
  }else{
    msg.channel.sendMesssage(":x: not found!")
  }
}.catch(console.error)
