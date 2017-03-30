exports.run = function(msg, CommandArguments, Discord)
{
  let query = CommandArguments.join(" ");

  var opts = {
    maxResults: 1,
    key: require("../sandboxed.js").config.yt
  };

  var search = require("youtube-search");

  search(query, opts, function (err, results) {
    console.log(results);

    let embed = new Discord.RichEmbed();

    embed.setTitle("Youtube Search:");
    embed.setThumbnail(results[0].thumbnails.default);
    embed.addField("Video", "[" + results[0].title + "](" + results[0].link + ")", true);
    embed.addField("Channel", "[" + results[0].channelTitle + "](https://youtube.com/channel/" + results[0].channelId + ")", true);
    msg.channel.sendEmbed(embed);
  });
};
