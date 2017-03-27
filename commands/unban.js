exports.run = function(msg, args, Discord, client)
{
  let user = args[0];
  let modlog = msg.guild.channels.find("name", "mod-log");

  let reason = args.join(" ").substring(user.length);
  if(msg.member.roles.find("name", "sandboxed") || msg.author.id === msg.guild.owner.id)
  {
    if(!user) return msg.reply("You dont have supplied a user! Try something like a ID!");

    if(!modlog)
    {
      msg.guild.unban(user).catch( (e) => {
        msg.channel.sendMessage("An error happened! Do i got ban permission? Or is the user just not banned?");
        console.log(e);
      });
      msg.channel.sendMessage(":ok_hand:");
    }else{
      msg.guild.unban(user).catch( (e) => {
        msg.channel.sendMessage("An error happened! Do i got ban permission? Or is the user just not banned?");
        console.log(e);
      });
      msg.channel.sendMessage(":ok_hand:");

      if(reason === null || reason === undefined)
      {
        reason = "no reason added!";
      }
      const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .addField("Action:", "Unban")
        .addField("User:", `${user.username}#${user.discriminator} (${user.id})`)
        .addField("Moderator:", `${msg.author.username}#${msg.author.discriminator}`)
        .addField("Reason", reason);
      return client.channels.get(modlog.id).sendEmbed(embed);
    }

  }else{
    msg.reply("Sorry, but you dont have permissions! You need the 'sandboxed' role to access to moderation commands!");
  }
};
