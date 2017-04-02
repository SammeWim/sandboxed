exports.run = function (msg)
{
  var voiceChannel = msg.member.voiceChannel;

  try{
    if(msg.member.voiceChannel.id !== msg.guild.members.get("279725066789322752").voiceChannel.id) return msg.channel.sendMessage("Im not in your Voicechannel!");
    if(!voiceChannel) return msg.channel.sendMessage("You are not connected to any voiceChannel!");
    voiceChannel.leave();
    msg.channel.sendMessage("I left the voicechannel!");
  }catch(e)
  {
    msg.channel.sendMessage("Error: ```js\n" + e + "```");
  }
};
