const Discord = require("discord.js");
const dotenv = require("dotenv").config();
const BOT_TOKEN = process.env.BOT_TOKEN;
const prefix ="**"
const client = new Discord.Client();
client.on("message", function(message) { 
    if (message.author.bot) {
        return;
    }    
    if (message.content.match(/cool car man/)) {
        message.reply(`COOL CAR MAN WHAT IS THAT A FERRRAI?????`);  
    } else if (message.content.match(/F1/)) {
        
    }
    /*      
    if(!message.content.startsWith(prefix)) {
        return;
    }

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    if (command === "ping") {
     const timeTaken = Date.now() - message.createdTimestamp;
     message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    } else if (command == "coolcarman") {
         message.reply(`COOL CAR MAN WHAT IS THAT A FERRRAI?????`);
    }*/
    
});                                      


client.login(BOT_TOKEN);
