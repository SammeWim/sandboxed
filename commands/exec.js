const exec = require('child_process').exec

exports.run = function(message, args, Discord, client)
{
    if (msg.author.id !== "220591718158827520") return msg.reply(":x: You are not permitted!");

    let plainargs = args.join(" ");
    exec(plainargs, (err, stdout, stderr) => {
        msg.channel.sendMessage("Input: " + plainargs + "\nOutput: ```\n"`${stdout}\n${stderr}` + "```")
});
}
