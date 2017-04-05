const fs = require('fs');
exports.start = async function(client)
{
    log("Starting sandboxed...");
    log("Loading command files..");

    let cmdFiles;

    const testFolder = '../commands/';
    fs.readdir(testFolder, (err, files) => {cmdFiles = files.length});

    log("loaded " + cmdFiles + " commands!");
    log("Setting up client..");

    client.user.setGame(">>help • " + client.guilds.size + " guilds. ❤", "https://twitch.tv/twitch");
    
}

function log(message)
{
    console.log(message);
}