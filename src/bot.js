import * as Discord from 'discord.js';
import { gitRepo } from './gh.js';


const client = new Discord.Client(
    {
        intents: ['GUILDS', 'GUILD_MESSAGES'],
    }
);
const token = "";

/**
 * 
 * @param {Discord.Message} message 
 */
async function onMessage(message){
    if (message.content.includes('!project')) {
        const userName = message.content.split(" ")[1];
        const projList = await gitRepo(userName);
        message.reply(`${projList.length} Git Repo projects: ${projList}.`);
        
        
    };
}


client.on('messageCreate', onMessage);


client.login(token);
