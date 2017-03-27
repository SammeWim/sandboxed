exports.run = function (msg) {
  if(msg.author.id === "220591718158827520")
  {
    let amount = parseInt(msg.content.split(" ").pop());
    try{
      if (!amount) return msg.reply("Specify an amount");
      if (amount === 0 || amount === 1) {
        return [msg.delete()];
      }
      return [msg.channel.bulkDelete(amount)];
    }catch(e)
    {
      msg.channel.sendMessage("Sorry, i dont have permissions/i cannot delete to old messages");
    }
  }else{
    let role = msg.guild.roles.find("name", "sandboxed");
    if (msg.member.roles.has(role.id) || msg.author.id === msg.guild.owner.id) {
      let amount = parseInt(msg.content.split(" ").pop());
      try{
        if (!amount) return msg.reply("Specify an amount");
        if (amount === 0 || amount === 1) {
          return [msg.delete()];
        }
        return [msg.channel.bulkDelete(amount)];

      }catch(e)
      {
        msg.channel.sendMessage("Sorry, i dont have permissions/i cannot delete to old messages");
      }

    } else {
      msg.reply("Sorry, but you dont have permissions! You need the 'sandboxed' role to access to moderation commands!");
    }
  }

};
