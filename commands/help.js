const { Discord, Client, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args, diaper) => {
    
    let argsresult;
    let mChannel = message.channel

    
    message.delete()
    if(mChannel) {
        const exampleEmbed = {
            color: 0x0099ff,
            title: "Philippines Air Help",
            description: "Bot made by litterbøx ✿#0001",
            fields: [
                {
                    name: 'Announce',
                    value: 'Usage: a!announce #<channel name> | <description> | <I Title> | <I Value> | <II Title> | <II Value> | <III Title> | <III Value>',
                },
                {
                    name: 'Careers',
                    value: 'Usage: a!careers #<channel name> | <description> | <I Title> | <I Value> | <II Title> | <II Value> | <III Title> | <Image URL>',
                    inline: true,
                },
               {
                    name: 'Development',
                    value: 'Usage: a!development #<channel name> | <description> | <I Title> | <I Value> | <II Title> | <II Value> | <III Title> | <Image URL>',
                    inline: true,
                },
                {
                    name: 'Flight',
                    value: 'Usage: a!flight #<channel name> | <Airport> | <Time> | <Destination>',
                    inline: true,
                },
                {
                    name: 'Flight Status',
                    value: 'Usage: a!flightstatus #<channel name> | <I Title> | <I Value> | <II Title> | <II Value> | <III Title> | <Image URL>',
                    inline: true,
                },
                {
                    name: 'Ping',
                    value: 'Usage: a!ping',
                    inline: true,
                },
                {
                    name: 'QOTD',
                    value: 'Usage: a!qotd #<channel name> | <description> | <I Title> | <I Value> | <II Title> | <II Value> | <III Title> | <Image URL>',
                    inline: true,
                },
                {
                    name: 'Status',
                    value: 'Usage: a!status #<channel name> | <I Title> | <I Value> | <II Title> | <II Value> | <III Title> | <Image URL>',
                    inline: true,
                },
            ],
	          image: {
		                url: 'https://i.postimg.cc/VN7Htdy4/ezgif-2-625f578818d9.png',
	                 },
            timestamp: new Date(),
        };
        
        message.channel.send({ embed: exampleEmbed });

    } else {
        argsresult = args.join(" ")
        message.channel.send("Please tag a channel in your message.")
    }

}


module.exports.help = {
    name: "help",
    description: "Displays all the commands available",
    usage: "help",
    type: "General" 
}