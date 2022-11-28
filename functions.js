const Discord = require("discord.js");
const fs = require('fs');
let msg = [];

async function executeCommand(command, message, args, client, info, functions) {
    client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
    for (const file of commandFiles) {
        if (file == `${command}.js`) {
            const cmd = require(`./commands/${file}`);
            try{
                client.commands.set(cmd.name, cmd, client);
                await client.commands.get(cmd.name).execute(message, args, client, info, functions);
                if (cmd.deletable == true) {
                    await message.delete();
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
}

module.exports = {executeCommand, msg}