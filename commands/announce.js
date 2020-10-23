const { Discord, Client, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args, diaper) => {
    
    let argsresult;
    let mChannel = message.mentions.channels.first()

    
    message.delete()
    if(mChannel) {
        const exampleEmbed = {
            color: 0x0099ff,
            title: "Announcement",
            description: diaper[1],
            fields: [
                {
                    name: diaper[2],
                    value: diaper[3],
                },
                {
                    name: diaper[4],
                    value: diaper[5],
                    inline: true,
                },
                {
                    name: diaper[6],
                    value: diaper[7],
                    inline: true,
                },
            ],
            timestamp: new Date(),
        };
        
        mChannel.send({ embed: exampleEmbed });

    } else {
        argsresult = args.join(" ")
        message.channel.send("Please tag a channel in your message.")
    }

}


module.exports.config = {
    name: "announce",
    description: "sends an announcement with a channel specified",
    usage: "!announce",
    aliases: ["acc", "announcement"]
}