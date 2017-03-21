const ytdl = require("ytdl-core");

exports.run = function(msg, args, Discord, client)
{
  const streamOptions = { seek: 0, volume: 1 };

  var voiceChannel = msg.member.voiceChannel;

  var search = require('youtube-search');

  if(args.includes("https"))
  {
    voiceChannel.join()
    .then(connection => {
    const stream = ytdl(args[0], {filter : 'audioonly'});
    const dispatcher = connection.playStream(stream, streamOptions);
    var embed = new Discord.RichEmbed();
    embed.setColor("#33CCCC");
    embed.setTitle(":musical_note: Now Playing:");
    embed.setDescription("unable to load!");
    embed.setFooter("Not playing? Check stats with >>stats");

    msg.channel.sendEmbed(embed)
  })

  }else{
  var opts = {
    maxResults: 1,
    key: require("../sandboxed.js").publicConfig.yt
  };

    search(args.join(" "), opts, function(err, results) {
      if(err) return console.log(err);

      voiceChannel.join()
      .then(connection => {

        var player = results + "";
        const stream = ytdl(results[0].link, {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);

        dispatcher.on("error", dError =>{
          console.log("Dispatcher Error: " + dError);
        })

        var embed = new Discord.RichEmbed();
        embed.setColor("#33CCCC");
          embed.setTitle(":musical_note: Now Playing:");
          embed.setDescription(results[0].title);
          embed.setFooter("Not playing? Check stats with >>stats");

          msg.channel.sendEmbed(embed)

      })
     .catch(console.error);
    });
  }
}
