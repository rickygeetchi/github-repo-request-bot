import got from 'got';

export async function gitRepo(userName) {
   
    const response = await got(`https://api.github.com/users/${userName}/repos?per_page=50`,{responseType: 'json'});
    const data = response.body;
    
    
    var projNames = [];

    for (var i = 0; i < data.length; i++){
       
       projNames.push(data[i].name);
    
    }

   return projNames;
  
   
}

