require('dotenv').config();
const Discord = require('discord.js');
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_API_KEY;
const parser = require('./helpers/parser');

const client = new Discord.Client();

client.login(DISCORD_BOT_TOKEN);

client.on("message", async (msg) => {
    if(msg.content === 'test') {
        const test = await parser.parseIncomingMessage(msg);
        console.log(test);
        msg.channel.send('im here');
    }
})