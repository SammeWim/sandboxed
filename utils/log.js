exports.Log = function(message)
{
  console.log(message);
}

exports.LogWarn = function(message)
{
  console.log("Warn: " + message);
}

exports.LogError = function(message)
{
  console.log("Error: " + message);
}
