const Discord = require("discord.js");
const fs = require('fs');

async function loadCommands(client) {
    client.commands = new Discord.Collection();
    fs.readdir(`./commands/`, (error, files) => {
        if(error) throw `Error loading commands: ${error}`;

            files.forEach(file => {
            if(!file.endsWith(`.js`)) return;

            const cmd = require(`./commands/${file}`);
            client.commands.set(cmd.name, cmd);

            console.log(`Loading ${file} as ${cmd.name}`);
        })
    });
}

module.exports = {loadCommands}