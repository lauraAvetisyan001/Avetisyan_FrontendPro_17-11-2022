function generateKey(){
const characters = '390keismkdsow==-579%hts';
let text = '';
const keyLength = prompt('Which length for key you want?');


    for(let i = 0; i < keyLength; i++) 
    text += characters.charAt(Math.floor(Math.random() * characters.length));  
    return text;
} 
alert(generateKey());