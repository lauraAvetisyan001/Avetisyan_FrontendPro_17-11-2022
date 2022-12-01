const lengthArr = prompt('What is the length of array?');

let arr = [];

for(i = 0; i < lengthArr; i++){
    arr[i] = Number([prompt(`Input a one number`)]);
    arr.sort(function(a,b) {
        return a - b;
    });
} console.log(arr);

arr.splice(1, 3);
console.log(arr);

