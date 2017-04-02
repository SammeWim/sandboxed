exports.performed = function(msg, command, CommandArguments, Discord, client)
{
  try{
    require(`./${command}.js`).run(msg, CommandArguments, Discord, client);
  }catch(e)
  {
   //nothing lel
   //insert shrug here
  }
};

exports.sandboxed = require("../sandboxed.js");
