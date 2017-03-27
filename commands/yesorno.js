exports.run = function (msg)
{
  var request = require("request");
  request("https://yesno.wtf/api/", function (error, response, body) {
    if (!error && response.statusCode === 200) {
      try {
        JSON.parse(body);
      } catch (e) {
        msg.channel.sendMessage("The API returned an unconventional response.");
        return;
      }

      var jsonr = JSON.parse(body);

      if(jsonr.answer === "no")
      {
        msg.channel.sendMessage("No! " + jsonr.image);
      }else{
        msg.channel.sendMessage("Yes! " + jsonr.image);
      }
    }
  });
};
