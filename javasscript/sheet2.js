// Q-11
let arr = [];

for(let i = 10; i > 0; i--){
    arr[-i+10] = i;
}
// console.log(arr);


// Q-16

// let arr16 = [1,1,1,1,1,1,2,2,2,2,3,5,7,8,8,8];

// let arr166 = [...new Set(arr16)]; // To remove duplicates
// console.log(arr166);

// let str =  "Js";
// for(let char of str){
//     console.log(char+char);
// }

//Q-17

let arr17 = [1,2,5,8,99,58,2,0,2,1,3,6,3];
const ans17b = [...new Set(arr17)].sort(function(a,b){
    return b-a;
})
// console.log(ans17b[1]);

//Q-18

let arr18 = [1,5,2,7,8,9,6,4,85];
// // const arr18b = [];
// for(let i = arr18.length - 1; i >= 0; i--){
//     arr18b.push(arr18[i]);
// }

// console.log(arr18b);

const arr18b = arr18.reverse();
// console.log(arr18b);


//Q-19
// const arr19 = [1,2,5,3,4,5,8,2,3,1,5];
// let obj = {};

// arr19.forEach(function(value){
//     obj[value] === undefined ? obj[value] = 1: obj[value]++;
// })

// console.log(obj);


// Callbacks and Closures: 

function abcd(fn){
    fn();
}

abcd(function(){
    console.log("Hello there")
});

//closures:

function abcde(){
    let a = 10;
    return function(){
        console.log(a);
    }
}

// Crete