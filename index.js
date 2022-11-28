const Discord = require("discord.js");
const data = require("./config.json")
const prefix = data.prefix;
const fs = require('fs');
const { Client, GatewayIntentBits } = require('discord.js');
const functions = require('./functions.js')

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildWebhooks
]});

functions.loadCommands(client);

client.on('ready', () => {
    console.log('Online!');
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    
    const args = (message.content.slice(prefix.length).trim().split(/ +/));
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;
    const cmd = client.commands.get(command);

    if (command) {
        try {
            await cmd.execute(client, message, args);
        } catch (e) {
            console.log(`\x1b[31m${message.author.tag} (${message.author.id}) ran ${config.prefix}${cmd.name}\x1b[39m\n\tError encountered: ${e}`);
        }
    }
});

client.login(data.token);