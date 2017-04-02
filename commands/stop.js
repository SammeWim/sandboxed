exports.run = function (msg)
{
  var voiceChannel = msg.member.voiceChannel;

  try{
    if(!voiceChannel) return msg.channel.sendMessage("You are not connected to any voiceChannel!");
    if(msg.guild.members.get("279725066789322752").voiceChannel.id === undefined || msg.guild.members.get("279725066789322752").voiceChannel.id === null) return msg.channel.sendMessage("Im not in your Voicechannel!");
    voiceChannel.leave().then( () => {
      msg.channel.sendMessage("Sure! I left the voiceChannel!");
    });
  }catch(e)
  {
    msg.channel.sendMessage("Error: ```js\n" + e + "```");
  }
};
