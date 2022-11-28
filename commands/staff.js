const Discord = require("discord.js");

module.exports = {
    name: 'staff',
    description: 'Lists current staff',
    permissions: null,
    deletable: false,
    async execute(message, args, client, info, functions) {
        await message.channel.send({ embeds: [{
            color: 0x9d58b6,
            title: "Staff members",
            description: "",
            fields: [
                {
                    name: "Zek:",
                    value: "<a:ze_arrrow:1046585778895061072> @placeholder",
                    inline: true
                },
                {
                    name: "Developer (Co-Owner):",
                    value: "<a:ze_arrrow:1046585778895061072> @placeholder",
                    inline: true
                },
                {
                    name: "Admin:",
                    value: "*Currently there are no Staff members with this role!*",
                    inline: true
                },
                {
                    name: "Sr. Mod:",
                    value: "<a:ze_arrrow:1046585778895061072> @placeholder",
                    inline: true
                },
                {
                    name: "Mod:",
                    value: "<a:ze_arrrow:1046585778895061072> @placeholder",
                    inline: true
                },
                {
                    name: "Trial:",
                    value: "<a:ze_arrrow:1046585778895061072> @placeholder",
                    inline: true
                }
            ]
          }]});
    }
}