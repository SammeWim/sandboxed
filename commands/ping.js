exports.run = function(msg, CommandArguments, Discord, client)
{
    var Embed = new Discord.RichEmbed();
    Embed.setColor("#33CCCC");

    Embed.setTitle("Ping,");
    Embed.setDescription(":ping_pong: Pong! " + client.ping);

    msg.channel.sendEmbed(Embed);
}
