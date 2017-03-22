const Discord = require("discord.js");
const client = new Discord.Client();

const ClientConfig = require("../config.json")
const BaseConfig = require("./configs/bConfig.json");
const Utils = require("./utils/utils.js");

const prefix = "b>>";

client.login(ClientConfig.token);

client.on("ready", () => {
  Utils.logger.Log("Starting bot...");

  client.user.setGame(">>help • " + client.guilds.size + " guilds. ❤");

  Utils.logger.Log("Started sandboxed!");
});

client.on("message", msg => {

  if (msg.author.bot) return false;
  let msgArguments = msg.content.split(" ").slice(1);
  let command = msg.content.substring(prefix.length).toLowerCase().split(" ")[0];

  if(!msg.mentions.users.size < 1)
  {
    if(msg.mentions.users.first().id === client.user.id){
      require("./mCommands/cleverbot.js").run(msg, msgArguments, Discord, client);
    }else{

    }
  }else{

  }

  if(msg.content.startsWith(prefix))
  {
    if(command === "eval")
    {
      var permitted = [
          "220591718158827520"
      ]
      if (!permitted.includes(msg.author.id)) {
          console.log(msg.author + " was trying to perform eval in " + msg.guild + "!");
          msg.reply(":x: You are not permitted to use this Command!");
      } else {
          try {
              var Code = eval(msgArguments.join(" "));
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
              console.log("Evaled " + CommandArguments.join(" ") + "! Asked by " + msg.author.username + "! Code/Usage: " + Code);
          } catch (e) {
              var embed = new Discord.RichEmbed();
              embed.setTitle("sandboxed - eval - ERROR");
              embed.setColor("#B9341B");
              embed.setDescription("```js\n" + e + "```");
              embed.setFooter("sandboxed - developed by lordjbs#3049");
              msg.channel.sendEmbed(embed);
          }
      }
    }else{
      return require("./commands/CommandWrapper.js").performed(msg, command, msgArguments, Discord, client);
    }
  }else{
    return false;
  }
});

exports.config = ClientConfig;
exports.bsConfig = BaseConfig;
