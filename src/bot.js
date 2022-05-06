import * as Discord from 'discord.js';
import { gitRepo } from './gh.js';


const client = new Discord.Client(
    {
        intents: ['GUILDS', 'GUILD_MESSAGES'],
    }
);
const token = "OTY5Mzc1NTgxNzg5NjUxMDA0.YmsfXA.IeUh3QTP0SSteQj_gCje1RI9Rjs";

/**
 * 
 * @param {Discord.Message} message 
 */
async function onMessage(message){
    if (message.content.includes('!project')) {
        const userName = message.content.split(" ")[1];
        const projList = await gitRepo(userName);
        message.reply(`Git Repo project names: ${projList}`);
        
        
    };
}


client.on('messageCreate', onMessage);


client.login(token);