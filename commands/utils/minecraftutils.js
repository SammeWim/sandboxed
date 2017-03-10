exports.infos = function (msg, args, Discord)
{
  var request = require('request')
  request("https://mcapi.ca/query/" + args[0] + "/info", function (error, response, body) {
  if (!error && response.statusCode === 200) {
    try {
      JSON.parse(body)
    } catch (e) {
      msg.channel.sendMessage('The API returned an unconventional response.')
      return
    }
    var web = JSON.parse(body)

    console.log(args[0]);
    let embed = new Discord.RichEmbed();
    try{
      if(web.players.online !== null)
      {
    embed.addField("Host", web.hostname, true);
    embed.addField("Status", web.status + " | Ping: " + web.ping, true);
    embed.addField("Players", web.players.online + " Players Online, max.: " + web.players.max, true);
    embed.addField("Version", web.version, true);
    embed.setThumbnail("https://mcapi.ca/query/" + args[0] + "/icon");
  }else{
    embed.addField("Host", web.hostname, true);
    embed.addField("Status", web.status + " | Ping: " + web.ping, true);
    embed.addField("Players", "null" + " Players Online, max.: " + "null", true);
    embed.addField("Version", web.version, true);
    embed.setThumbnail("https://mcapi.ca/query/" + args[0] + "/icon");
  }

    msg.channel.sendEmbed(embed);
  }catch(e)
  {
    msg.channel.sendMessage("Oops! Something went wrong. Maybe the server blocks to see online players?");
    console.log(e);
  }
  }
  })
}
