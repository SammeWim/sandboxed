exports.performed = function(msg, command, CommandArguments, Discord, client)
{
  try{
    delete require.cache[require.resolve(`./${command}.js`)];
    require(`./${command}.js`).run(msg, CommandArguments, Discord, client);
  }catch(e)
  {
   //nothing lel
   //insert shrug here
  }
};

exports.sandboxed = require("../sandboxed.js");
