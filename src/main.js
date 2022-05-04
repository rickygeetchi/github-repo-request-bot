import { getTemperature } from "./weather.js";

async function main(){
    const temp = await getTemperature(64109);
    console.log(temp);
    // console.log()
}

main();