import * as Discord from 'discord.js';
import { getTemperature } from './weather.js';

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
    if (ZipCodeFunc(message.content)) {
        const temp = await getTemperature(message.content)
        message.reply(`It is currently ${temp} outside`)
    };
}

function ZipCodeFunc(str)
{
 RegExp = /^[0-9]{5}/;
  
        if (RegExp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}


client.on('messageCreate', onMessage);

console.log(ZipCodeFunc(64109))

client.login(token);