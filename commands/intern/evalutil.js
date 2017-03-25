exports.evaluating = function(msg, Code, Discord, client)
{
  if (typeof Code !== 'string')
      Code = require('util').inspect(Code, {
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
  console.log("Evaled " + msgArguments.join(" ") + "! Asked by " + msg.author.username + "! Code/Usage: " + Code);
}

exports.evaluateerror = function(msg, e, Discord, client)
{
  var embed = new Discord.RichEmbed();
  embed.setTitle("sandboxed - eval - ERROR");
  embed.setColor("#B9341B");
  embed.setDescription("```js\n" + e + "```");
  embed.setFooter("sandboxed - developed by lordjbs#3049");
  msg.channel.sendEmbed(embed);
}
