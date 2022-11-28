const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: 'Replies with help stuff.',
    permissions: null,
    deletable: false,
    async execute(message, args, client, info, functions) {
        await message.channel.send("no.")
    }
}
