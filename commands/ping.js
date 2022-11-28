const Discord = require("discord.js");

module.exports = {
    name: 'ping',
    description: 'Replies with pong.',
    permissions: null,
    deletable: false,
    async execute(message, args, client, info, functions) {
        await message.channel.send("Pong! UwU :smile:").then((msg) => {
            msg.edit(`Pong! \`${client.ws.ping}ms\``);
        });
    }
}