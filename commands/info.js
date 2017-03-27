exports.run = function(msg, CommandArguments, Discord, client)
{
  try{
    if(msg.author.id !== "220591718158827520") return msg.channel.sendMessage(":x: You are not permitted to use this Command!");
    console.log("workin");
    if(CommandArguments[0].toLowerCase() === "server")
    {
      if(CommandArguments[1].length < 1) return msg.channel.sendMessage("Wut? You'll need the id, ya know?");
      let guild = client.guilds.get(CommandArguments[1]);
      let users = guild.members.size;
      let bots = guild.members.filter(x => x.user.bot).map(x => x.user.username).length;
      let owner = guild.owner.displayName + " ( " + guild.owner.id + ")";
      let name = guild.name + " (" + guild.id + ")";

      let embed = new Discord.RichEmbed();
      embed.setTitle("Guild info: ");
      embed.addField("Name: ", name, true);
      embed.addField("Users: ", users, true);
      embed.addField("Bots: ", bots,true);
      embed.addField("Owner: ", owner,true);
      embed.setFooter(name , guild.iconURL);

      msg.channel.sendEmbed(embed);
    }else if(CommandArguments[0].toLowerCase() === "invite")
    {
      if(CommandArguments[1].length < 1) return msg.channel.sendMessage("Wut? You'll need the id, ya know?");
      let guild = client.guilds.get(CommandArguments[1]);
      guild.defaultChannel.createInvite().then(invite =>
      msg.channel.sendMessage("http://discord.gg/" + invite.code));
      msg.delete(5000);
    }else if(CommandArguments[0].toLowerCase() === "id")
    {
      if(CommandArguments[1].length < 1) return msg.channel.sendMessage("Wut? You'll need tha name, ya know?");
      let name = CommandArguments[1];
      try{
        msg.channel.sendMessage("ID: " + client.guilds.find("name", name).id);
      }catch(e)
      {
        msg.channel.sendMessage("A error happened. Ya know?");
      }
    }
  }catch(e)
  {
    console.log(e);
  }
};
