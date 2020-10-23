const { Discord, Client, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args, diaper) => {
    
    let argsresult;
    let mChannel = message.mentions.channels.first()

    
    message.delete()
    if(mChannel) {
        const exampleEmbed = {
            color: 0x0099ff,
            title: "Status",
            description: "Current Status",
            fields: [
                {
                    name: diaper[1],
                    value: diaper[2],
                },
                {
                    name: diaper[3],
                    value: diaper[4],
                    inline: true,
                },
            ],
	          image: {
		                url: diaper[5],
	                 },
            timestamp: new Date(),
        };
        
        mChannel.send({ embed: exampleEmbed });

    } else {
        argsresult = args.join(" ")
        message.channel.send("Please tag a channel in your message.")
    }

}


module.exports.config = {
    name: "status",
    description: "sends status updateswith a channel specified",
    usage: "!flightstatus",
    aliases: ["stats","stat"]
}