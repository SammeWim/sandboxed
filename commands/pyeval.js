exports.run = function(msg, argszz, Discord, client)
{
  let args = msg.content.split(" ").slice(1);

  require("child_process").exec("python3 " + args.join(" "), (e, stdout) => {
    msg.channel.sendMessage("PyEval: " + stdout)
  })
};
