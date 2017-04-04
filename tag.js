let normalPath = "../img/"
let tags = exports.tags = [
  "comeandfight",
  "shesaid",
  "lenny",
  "fight",
  "tableflip",
  "shrug"
];

let tagurls = exports.tagurls = [
  normalPath + "fight.gif",//0
  normalPath + "shesaid.gif",//1
  "( ͡° ͜ʖ ͡°)",//3
  "(ง'̀-'́)ง",//4
  "(╯°□°）╯︵ ┻━┻",//5
  '¯\\_(ツ)_/¯',//6
]

exports.run = function(msg, args)
{//k
  try{
  if(args[0] === "comeandfight")
  {
     msg.channel.sendFile(tagurls[0]);
  }else if(args[0] === "shesaid")
  {
     msg.channel.sendFile(tagurls[1]);
  }else if(args[0] === "lenny")
  {
     msg.channel.sendMessage(tagurls[2])
  }else if(args[0] === "fight")
  {
     msg.channel.sendMessage(tagurls[2])
  }else if(args[0] === "tableflip")
  {
     msg.channel.sendMessage(tagurls[2])
  }else if(args[0] === "shrug")
  {
     msg.channel.sendMessage(tagurls[2])
  }else if(args[0] === tags[6])
  {
     msg.channel.sendMessage(tagurls[2])
  }else{
     msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle("Tag not found!")
    .setColor("#33CCCC")
    .addField("Tags: ", tags.join(", "), true)
  )
  }
}catch(e)
{
  msg.channel.sendMessage("err: ```js\n" + e + "```+")
}
}
