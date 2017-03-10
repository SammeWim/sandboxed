exports.run = function (msg, CommandArguments, Discord, client)
{
  var request = require('request')
request('http://random.cat/meow', function (error, response, body) {
  if (!error && response.statusCode === 200) {
    try {
      JSON.parse(body)
    } catch (e) {
      msg.channel.sendMessage('The API returned an unconventional response.')
      return
    }
    var cat = JSON.parse(body)
    msg.channel.sendMessage(cat.file)
  }
})
}
