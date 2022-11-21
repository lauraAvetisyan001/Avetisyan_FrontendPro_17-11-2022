let string = '';
const errorString = 'It is a pity that you did not want to enter yours ';


const dateBirth = prompt('What is your date of birth?');

if(dateBirth){
    const age = 2022 - dateBirth;
    string = `${age} \n`;
} else {
    alert(errorString + 'age');
}


const city = prompt('What city do you live in?');
if (city) {
    switch(city) {
        case 'Kyiv':
            string = string + 'You live in the capital of Ukraine \n';
            break;
        case 'London' :
            string += 'You live in the  capital of Great Britain \n';
            break;
        case 'Washington' :
            string += 'You live in the  capital of USA \n';
            break;
        default:
            string += `You live in the city ${city} \n`;
    } 
} else {
    alert(errorString + 'city');
}

const sport = prompt('What is your favourite sport?');

if(sport) {
    switch(sport) {
        case 'Basketball':
            string +=  'Cool! Do you want to become Michael Jordan?';
            break;
        case 'Football':
            string +=  'Cool! Do you want to become Cristiano Ronaldo?';
            break;
        case 'Hockey':
            string +=  'Cool! Do you want to become Connor McDavid?';
            break;
        default:
            string += `Cool! I like ${sport} too:)`;
    }
} else {
    alert(errorString + 'sport');
}

const show = confirm('Show you?');
if(show) {
    alert(string ? string : 'You did not enter something');
} else {
    alert("I'm sorry you didn't want to see");
}