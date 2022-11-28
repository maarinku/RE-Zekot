const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: 'Replies with help stuff.',
    permissions: null,
    deletable: false,
    async execute(message, args, client, info, functions) {
        await message.channel.send({ embeds: [{
            color: 0x9d58b6,
            title: "Help",
            description: "<a:ze_arrrow:1046585778895061072> *Select command category!* \n\n Get more information a bout the bot by executing the `.info` command.",
            footer: {
                text: "You can also use .help <command>"
            }
          }]});
    }
}