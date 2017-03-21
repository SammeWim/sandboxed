const Discord = require("discord.js");
const config = require("../config.json");
//Insert memes here :P
const client = new Discord.Client();

const configuration = require("./commands/BoatCFG/BoatCFG.json")

let User = client.user;
let Guilds = client.guilds.size;

client.login(config.token);

client.on("ready", () =>{
    console.log("sandboxed sucessfully started!");
    update(client, Guilds);
})
const prefixes = [">>", "s>>"];
client.on("message", msg =>{

  if(msg.content.includes(client.token))
  {
    msg.delete();
    msg.channel.sendMessage("Nice try, bitch.")
  }

  let prefix = false;

  for(const thisPrefix of prefixes) {
    if(msg.content.startsWith(thisPrefix)) prefix = thisPrefix;
  }
  var command = msg.content.substring(prefix.length).toLowerCase().split(" ")[0];

  var CommandArguments;
  CommandArguments = msg.content.split(" ").slice(1);

  if(!msg.content.startsWith(prefix)) return false;

  if(command === "eval")
  {
    var permitted = [
      "220591718158827520"
    ]
    if(!permitted.includes(msg.author.id))
    {
      console.log(msg.author + " was trying to perform eval in " + msg.guild + "!");
    }else{
      try{
        var Code = eval(CommandArguments.join(" "));
        if (typeof Code !== 'string')
        Code = require('util').inspect(Code, {depth:0});
        let tok = client.token
        Code = Code.replace(new RegExp(client.user.email, "gi"), "git gud").replace(new RegExp(client.token, "gi"), "git gud")
        var embed = new Discord.RichEmbed();
        if(!Code.includes(tok.toString()))
        {
          embed.setColor("#33CCCC");
          embed.setTitle("sandboxed - eval");
          embed.setDescription("```js\n" + Code + "```");
          embed.setFooter("sandboxed - developed by lordjbs#3049");
          msg.channel.sendEmbed(embed);
        }else{
          msg.delete();
          msg.channel.sendMessage("Nice try, bitch.");
        }
        //msg.channel.sendMessage("```js\n" + Code + "```");
        console.log("Evaled " + CommandArguments.join(" ") + "! Asked by " + msg.author.username + "! Code/Usage: " + Code);
      }catch(e)
      {
        var embed = new Discord.RichEmbed();
        embed.setTitle("sandboxed - eval - ERROR");
        embed.setColor("#B9341B");
        embed.setDescription("```js\n" + e + "```");
        embed.setFooter("sandboxed - developed by lordjbs#3049");
        msg.channel.sendEmbed(embed);
      }
    }
  }else if(command === "reboot"){
    if(msg.author.id !== "220591718158827520"){

    }else{
      msg.channel.sendMessage("Rebooting Core...");
      console.log("Rebooting core...")
      setTimeout(reboot, 3000)
      console.log("rebooted!")
    }
  }else{
    var Manager = require("./commands/CommandWrapper.js")
    Manager.performed(msg, command, CommandArguments, Discord, client);
  }

})

function reboot()
{
  return process.exit(0);
}

function wat(msg)
{
  return msg.channel.sendMessage("https://media.giphy.com/media/1L5YuA6wpKkNO/giphy.gif");
}


function update(dClient, guildz)
{
  var statuses = [
    "❤",
    "Its getting recoded!",
    "<3",
    "We are on " + guildz + " Servers!",
    "❤ Avihay",
    "Beep. BEEEEP.",
    ">>help | Recoding"
  ]
  if(!statuses.includes(dClient.user.presence.game.name)) dClient.user.setGame(statuses[1]);
  var s = dClient.user.presence.game.name;
  if(s === statuses[0])
  {
    dClient.user.setGame(statuses[1])
  }else if(s === statuses[1])
  {
    dClient.user.setGame(statuses[2])
  }else if(s === statuses[2])
  {
    dClient.user.setGame(statuses[3])
  }else if(s === statuses[3])
  {
    dClient.user.setGame(statuses[4])
  }else if(s === statuses[4])
  {
    dClient.user.setGame(statuses[5])
  }else if(s === statuses[5])
  {
    dClient.user.setGame(statuses[6])
  }else if(s === statuses[6])
  {
    dClient.user.setGame(statuses[1])
  }else{
    dClient.user.setGame(statuses[1])
  }
  setTimeout(update, 30000);

}

client.on("guildCreate", () =>{
  client.user.setGame(">>help | " + client.guilds.array().length + " Guilds.");
})

process.on("unhandledRejection", err => {
  console.error(`Uncaught Promise Error: \n${err.stack}`);
});

exports.publicConfig = require("../config.json");
exports.BoatCFG = require("./commands/BoatCFG/BoatCFG.json")

//"if if if if if if"
