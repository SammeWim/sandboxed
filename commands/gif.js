const gif_lib = require("./utils/gifLIB.js");

exports.run = function (msg, args)
{
  if(args !== " " || args !== "" || args !== null)
  {
    gif_lib.get_gif(args, function (id) {
      if (typeof id !== "undefined") {
        msg.channel.sendMessage("http://media.giphy.com/media/" + id + "/giphy.gif [Tags: " + args + "]");
      } else {
        msg.reply("Sorry! Invalid tags, try something else. For example something that exists [Tags: " + args + "]");
      }
    });
  }else{
    msg.channel.sendMessage("Nothing found. Try using a tag! usage: `>>gif <tags>`");
  }
};
