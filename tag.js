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

exports.run = async function(msg)
{
  try{
  let args = msg.content.split(" ").slice(1);
  if(args[0] === tags[0])
  {
    let send = await msg.channel.sendMessage("Uploading...");
    send.delete()
    await msg.channel.sendFile(tagurls[0]);
  }else if(args[0] === tags[1])
  {
    let send = await msg.channel.sendMessage("Uploading...");
    send.delete()
    await msg.channel.sendFile(tagurls[1]);
  }else if(args[0] === tags[2])
  {
    await msg.channel.sendMessage(tagurls[2])
  }else if(args[0] === tags[3])
  {
    await msg.channel.sendMessage(tagurls[2])
  }else if(args[0] === tags[4])
  {
    await msg.channel.sendMessage(tagurls[2])
  }else if(args[0] === tags[5])
  {
    await msg.channel.sendMessage(tagurls[2])
  }else if(args[0] === tags[6])
  {
    await msg.channel.sendMessage(tagurls[2])
  }else{
    await msg.channel.sendEmbed(new Discord.RichEmbed()
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