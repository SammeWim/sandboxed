exports.performed = function(msg, command, CommandArguments, Discord, client)
{
  try{
   var cmd = require(`./${command}.js`)
   cmd.run(msg, CommandArguments, Discord, client);
   delete require.cache[require.resolve(`./${command}.js`)]
 }catch(e)
 {
   //nothing lel
   //insert shrug here
 }
}

exports.sandboxed = require("../sandboxed.js");
