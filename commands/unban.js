exports.run = function(msg, args, Discord, client)
{
  let user = args[0];
  let modlog = msg.guild.channels.find("name", "mod-log");

  let reason = args.join(" ").substring(user.length);

  if(msg.member.roles.find("name", "Moderator") || msg.author.id !== msg.guild.owner.id)
  {
    if(!user) return msg.reply("You dont have supplied a user! Try something like a ID!")

    if(!modlog)
    {
      try{
      msg.guild.unban(user);
      msg.channel.sendMessage(":ok_hand:")
    }catch(e)
    {
      msg.channel.sendMessage("Sorry, but a error happened. Do i have ban/unban permission?")
    }
    }else{
      try{
      msg.guild.unban(user);
      msg.channel.sendMessage(":ok_hand:")

      if(reason === null || reason === undefined)
      {
        reason = "no reason added!"
      }
      const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .addField('Action:', 'Unban')
        .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
        .addField('Moderator:', `${msg.author.username}#${msg.author.discriminator}`)
        .addField('Reason', reason);
      return client.channels.get(modlog.id).sendEmbed(embed);
    }
    }catch(e)
    {
      msg.channel.sendMessage("Sorry, but a error happened. Do i have ban/unban permission?")
    }
    }
  }
}
