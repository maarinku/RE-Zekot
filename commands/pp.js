const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'pp',
    description: 'Replies with your pp size.',
    permissions: null,
    deletable: false,
    async execute(message, args, client, info, functions) {
        function getPp(file) {
            var dat = fs.readFileSync(file, "utf8");
            var lines = dat.split("\n");
            return lines[Math.floor(Math.random()*lines.length)];
        }
        var ppsize = getPp("commands/pp.txt");
        await message.channel.send({ embeds: [{
            color: 0x9d58b6,
            title: "",
            description: `${message.author}'s pp size:\n**${ppsize}**`
          }]});
        
    }
}