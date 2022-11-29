// Задача №1

// let a = 19.5;

// do{
//     a += 0.5;
//     console.log(a);
// } while(a < 30);

//  =============================  
    

// Задача №2

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for(let a = 0; a < arr.length; a++){
//     console.log(arr[a] * 27);
// }

// ==================================



// Задача №3

// const number = 100;

// for(let a = 1; a**2 < number; a++){
//     const result = a**2;
//     console.log(result);
// }
// ========================================



// Задача №4

const num = prompt('input a number');
function test(num){
    for(let i = 2; i < num; i++) 
        if(num % i === 0) 
            console.log('Это не простое число');
            console.log('Это простое число');
          
             
} 







// ==========================================

// Задача №5

// const num = prompt('input a number');

// for(let n = 1; n < 10; n++){
//     const result = 3**n;
//     if(num == result){
//         alert(`Да, число ${num} можно получить, если возвести его в ${n} степень`);
//         break;
//     } else {
//         alert(`Число ${num} нельзя получить, если возвести его в ${n} степень \n Нажми ок! :)`);       
//     }   
// };