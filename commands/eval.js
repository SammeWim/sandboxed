exports.run = function(msg, args, Discord, client)
{
  var permitted = [
    "220591718158827520"
  ];
  if (!permitted.includes(msg.author.id)) {
    console.log(msg.author + " was trying to perform eval in " + msg.guild + "!");
    msg.reply(":x: You are not permitted to use this Command!");
  } else {
    try {
      var Code = eval(args.join(" "));
      if (typeof Code !== "string")
        Code = require("util").inspect(Code, {
          depth: 0
        });
      let tok = client.token;
      Code = Code.replace(new RegExp(client.user.email, "gi"), "git gud").replace(new RegExp(client.token, "gi"), "git gud");
      var embed = new Discord.RichEmbed();
      if (!Code.includes(tok.toString())) {
        embed.setColor("#33CCCC");
        embed.setTitle("sandboxed - eval");
        embed.setDescription("```js\n" + Code + "```");
        embed.setFooter("sandboxed - developed by lordjbs#3049");
        msg.channel.sendEmbed(embed);
      } else {
        msg.delete();
        msg.channel.sendMessage("Nice try, bitch.");
      }
      console.log("Evaled " + args.join(" ") + "! Asked by " + msg.author.username + "! Code/Usage: " + Code);
    } catch (e) {
      var Eembed = new Discord.RichEmbed();
      Eembed.setTitle("sandboxed - eval - ERROR");
      Eembed.setColor("#B9341B");
      Eembed.setDescription("```js\n" + e + "```");
      Eembed.setFooter("sandboxed - developed by lordjbs#3049");
      msg.channel.sendEmbed(Eembed);
      console.log("Evaled " + args.join(" ") + "! Asked by " + msg.author.username + "! Code/Usage: " + Code);
    }
  }
};
