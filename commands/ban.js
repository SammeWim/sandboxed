exports.run = function(msg, args, Discord, client)
{

  let user = msg.mentions.users.first();
  let guild = msg.guild;
  let modlog = msg.guild.channels.find("name", "mod-log");
  let reason = args.join(" ").substring(user.length);
  if(msg.member.roles.find("name", "sandboxed") || msg.author.id === msg.guild.owner.id)
  {
    if(reason.length < 1) return msg.reply("You need to add a reason!");
    if(msg.mentions.users.size < 1) return msg.reply("You need to mention the user you wanna ban!");
    if(!msg.guild.member(user).bannable) return msg.reply("Sorry, but i cannot ban this user!");

    user.sendMessage("You have been banned from " + guild.name + "! Reason: " + reason);
    msg.guild.ban(user, 2);
    msg.channel.sendMessage(":ok_hand:");

    if(!modlog)
    {
      //eslint -.-
    }else{
      const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .addField("Action:", "Ban")
        .addField("User:", `${user.username}#${user.discriminator} (${user.id})`)
        .addField("Moderator:", `${msg.author.username}#${msg.author.discriminator}`)
        .addField("Reason", reason);
      return client.channels.get(modlog.id).sendEmbed(embed);
    }

  }else{
    msg.reply("Sorry, but you dont have permissions! You need the 'sandboxed' role to access to moderation commands!");
  }
};
