const Discord = require("discord.js");
const client = new Discord.Client();

const ClientConfig = require("../config.json")
const BaseConfig = require("./configs/bConfig.json");
const Utils = require("./utils/utils.js");

const prefix = "b>>";

client.login(ClientConfig.token);

client.on("ready", () => {
  Utils.logger.Log("Starting bot...");

  client.user.setGame(">>help • " + client.guilds.size + " guilds. ❤", "https://twitch.tv/twitch");

  Utils.logger.Log("Started sandboxed!");
});

client.on("message", msg => {

  if (msg.author.bot) return false;
  let msgArguments = msg.content.split(" ").slice(1);
  let command = msg.content.substring(prefix.length).toLowerCase().split(" ")[0];

  if(msg.content.startsWith("@sandboxed#9142") && !msg.mentions.users.size < 1)
  {
    if(msg.mentions.users.first().id === client.user.id){
      require("./mCommands/cleverbot.js").run(msg, msgArguments, Discord, client);
    }
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
              require("./commands/intern/evalutil.js").evaluating(msg, Code, Discord, client, msgArguments);
              delete require.cache[require.resolve(`./commands/intern/evalutil.js`)]
          } catch (e) {
            require("./commands/intern/evalutil.js").evaluateerror(msg, e, Discord, client, msgArguments, Code);
            delete require.cache[require.resolve(`./commands/intern/evalutil.js`)]
          }
      }
    }else{
      return require("./commands/CommandWrapper.js").performed(msg, command, msgArguments, Discord, client);
    }
  }else{
    return false;
  }
});

client.on("error", e => {
  console.log("Error: " + e);
});

client.on("warn", e => {
  console.log("Warn: " + e);
});

client.on("guildCreate", guild => {
  client.users.get("220591718158827520").sendMessage("Joined " + guild.name + " owner: " + guild.owner.displayName + " (" + guild.owner.id + ")");
  client.user.setGame(">>help • " + client.guilds.size + " guilds. ❤", "https://twitch.tv/twitch");
})


exports.config = ClientConfig;
exports.bsConfig = BaseConfig;
