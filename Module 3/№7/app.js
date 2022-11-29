const lengthArr = prompt('What is the length of array?');

let arr = [];

for(i = 0; i <= lengthArr - 1; i++){
    arr[i] = Number([prompt(`Input a one number`)]);
    arr.sort(function(a,b) {
        return a - b;
    });
} console.log(arr);


// arr.sort(function(a, b) {
//     return a - b; 
// });

// const arr = [5, 7, 3, 1, 9];

// arr.sort(function(a,b) {
//     return a - b;
// }); console.log(arr);

// arr.splice(1, 3);

// console.log(arr);