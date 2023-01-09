const choose = prompt('What operation to carry out?');

const firstNumber = prompt('Enter first number', 0);

const secondNumber = prompt('Enter second number');

const sub = Number(firstNumber) + Number(secondNumber);
const diff = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber/secondNumber;


switch(choose) {
    case 'Sub':
    alert(` ${firstNumber} + ${secondNumber} = ${sub}`);
    break;
    case 'Diff':
    alert(` ${firstNumber} - ${secondNumber} = ${diff}`);
    break;
    case 'Mult':
    alert(` ${firstNumber} * ${secondNumber} = ${mult}`);
    break;
    case 'Div':
    alert(` ${firstNumber} / ${secondNumber} = ${div}`);
    break; 
    default:
    alert('Sorry, you entered something wrong');
}


// for(let a = 1; a <= 100; a++) {
//     if (a % 2 == 0) {
//     console.log(a);
    
// }}

// const choose = prompt('What is operation you want do?');
// const firstNum = prompt('Input first number, please');
// const secondNum = prompt('Input second number, please');

// const sub = Number(firstNum) + Number(secondNum);
// const diff = firstNum - secondNum;
// const mult = firstNum * secondNum;
// const div = firstNumber/secondNumber;

// switch(choose){
//     case 'Sub':
//         alert(sub);
//         break;
//     case 'Diff':
//         alert(diff);
//         break;
//     case 'Mult':
//         alert(mult);
//         break;
//     case 'Div':
//         alert(div);
//         break;
//     default:
//         alert('Sorry, you entered something wrong');
// }