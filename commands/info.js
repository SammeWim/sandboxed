let clientvars = require("../utils/clientvars.js");
let variables = [
    clientvars.guilds,
    clientvars.channels,
    clientvars.users,
    clientvars.commandusage
];

exports.run = async function(msg, args, Discord, client)
{/*
    await msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle("sandboxed")
    .setThumbnail(client.user.avatarURL)
    .addField("Bot", "Heya! I am sandboxed, an bot, coded in the libary discord.js.\nMy backend is completely coded by lordjbs#3049, that also maintains this bot.", true)
    .addField("Bots stats: ", "**Guilds:** " + variables[0] + "(Channels: " + variables[1] + "\n**Users:** " + variables[2] + "\n**Commands used in this Session:** " + variables[3], true)
    .setFooter("Developed by lordjbs#3049 | Copyright (C) 2016-2017 by lordjbs.")
    )*/
    await msg.reply("In development (like new things)")
}