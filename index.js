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

client.on('ready', () => {
    console.log('Online!');
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (functions.msg.length >= 1) {
        functions.msg.length = 0
    }
    functions.msg.push(message);

    const args = (message.content.slice(prefix.length).trim().split(/ +/));
    const command = args.shift().toLowerCase();

    if (command) {
        try {
            await functions.executeCommand(command, message, args, client, data, functions)
        } catch (e) {
            console.log(e);
        }
    }
});

client.login(data.token);