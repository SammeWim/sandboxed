const ytdl = require("ytdl-core");

exports.run = function(msg, args, Discord)
{
  const streamOptions = { seek: 0, volume: 1 };

  var voiceChannel = msg.member.voiceChannel;

  var search = require("youtube-search");

    var opts = {
      maxResults: 1,
      key: require("../sandboxed.js").config.yt
    };
    msg.channel.sendMessage("Downloading.. Please wait!").then(m => {
    search(args.join(" "), opts, function(err, results) {
      if(err) return console.log(err);

      voiceChannel.join()
      .then(connection => {
        const stream = ytdl(results[0].link, {filter : "audioonly", quality : "highest"});
        const dispatcher = connection.playStream(stream, streamOptions);

        dispatcher.on("error", dError =>{
          console.log("Dispatcher Error: " + dError);
        });

        var embed = new Discord.RichEmbed();
        embed.setColor("#33CCCC");
        embed.setTitle(":musical_note: Now Playing:");
        embed.setDescription(results[0].title);
        embed.setFooter("Not playing? Check stats with >>stats");

        m.edit(" ", {embed});

      })
     .catch(console.error);
    });
  });
};
