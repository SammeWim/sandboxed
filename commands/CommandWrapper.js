exports.performed = function(msg, command, CommandArguments, Discord, client)
{
  try{
   var cmd = require(`./${command}.js`)
   cmd.run(msg, CommandArguments, Discord, client);
 }catch(e)
 {
   //nothing lol
   console.log(e);
 }
}
