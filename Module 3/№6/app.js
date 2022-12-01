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
//     console.log(a);
// }
// ========================================



// Задача №4


// const num = prompt('input a number');

// let flag = true;
// for(let i = 2; i < num; i++){   
//     if(num % i === 0){
//         flag = false;        
//         break;
// };  };
//     if(flag){
//         alert('Это простое число');
//     } else {
//         alert('Это составное число');
//     }
// ==========================================


// Задача №5

const num = prompt('input a number');

for(let n = 1; n < 10; n++){
    const result = 3**n;
    if(num == result){
        alert(`Да, число ${num} можно получить, если возвести 3 в ${n} степень`);
        break;
    } else {
        alert(`Число ${num} нельзя получить, если возвести 3 в ${n} степень \n Нажми ок! :)`);       
    }   
};