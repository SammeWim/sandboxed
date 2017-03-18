const SysUtils = require("./utils/Memory.js")

exports.run = function(message, CommandArguments,Discord, Client)
{
    var usage = process.memoryUsage();
    const Embed = new Discord.RichEmbed();
    Embed.setColor("#33CCCC");

    Embed.setTitle("sandboxed Stats:\n")
    Embed.addField("Bot Stats", "Memory: " + SysUtils.bytesToSize(usage.heapTotal, 3) + "\nUptime: " + SysUtils.getUptime(), true);
    Embed.addField("Bot Guild Stats", "Guilds: " + Client.guilds.array().length + "\nChannels: " + client.channels.array().length, true);
    Embed.addField("Lib", "Discord.JS " + Discord.version + ", Node.JS " + process.version + " and :heart:", true);
    Embed.addField("Voice Connections", Client.voiceConnections.array().length)
    Embed.setFooter("sandboxed A.1vS, Coded by @lordjbs#3049");
    message.channel.sendEmbed(Embed);
}
