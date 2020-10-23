const { Discord, Client, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args, diaper) => {
    
    let argsresult;
    let mChannel = message.mentions.channels.first()

    
    message.delete()
    if(mChannel) {
        const exampleEmbed = {
            color: 0x0099ff,
            title: "Flight Announcement",
            description: "New flight.",
            fields: [
                {
                    name: "Airport",
                    value: diaper[1],
                },
                {
                    name: "Time",
                    value: diaper[2],
                    inline: true,
                },
                {
                    name: "Destination",
                    value: diaper[3],
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
    name: "flight",
    description: "sends an flight announcement with a channel specified",
    usage: "!flight",
    aliases: ["flightannounce", "fly"]
}