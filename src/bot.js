import * as Discord from 'discord.js';
import { getTemperature } from './weather.js';

let regExp = ""

const client = new Discord.Client(
    {
        intents: ['GUILDS', 'GUILD_MESSAGES'],
    }
);
const token = "";

/**
 * 
 * @param {discord.Message} message 
 */
async function onMessage(message){
    if (zipCodeFunc(message.content)) {
        const temp = await getTemperature(message.content)
        message.reply(`It is currently ${temp} outside`)
    };
}

function zipCodeFunc(str){
 regExp = /^[0-9]{5}/;
  
        if (regExp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}


client.on('messageCreate', onMessage);


client.login(token);