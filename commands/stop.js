exports.run = function (msg, CommandArguments, Discord, client)
{
  var voiceChannel = msg.member.voiceChannel;

  try{
    voiceChannel.leave();
    msg.channel.sendMessage("I left the voicechannel!");
  }catch(e)
  {
    msg.channel.sendMessage("ERROR: im not connected to any voicechannel")
  }
}
