const Discord = require("discord.js");
const client = new Discord.Client();

const ClientConfig = require("../config.json");
const BaseConfig = require("./configs/bConfig.json");
const Utils = require("./utils/utils.js");

const prefix = ">>";

client.login(ClientConfig.token);

client.on("ready", () => {
  Utils.logger.Log("Starting bot...");

  client.user.setGame(">>help • " + client.guilds.size + " guilds. ❤", "https://twitch.tv/twitch");

  Utils.logger.Log("Started sandboxed!");
});

client.on("message", msg => {

  if (msg.author.bot) return false;
  if(!msg.content.startsWith(prefix)) return false;
  let msgArguments = msg.content.split(" ").slice(1);
  let command = msg.content.substring(prefix.length).toLowerCase().split(" ")[0];

  delete require.cache[require.resolve("./commands/CommandWrapper.js")];

  require("./commands/CommandWrapper.js").performed(msg, command, msgArguments, Discord, client);
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
});

exports.config = ClientConfig;
exports.bsConfig = BaseConfig;
