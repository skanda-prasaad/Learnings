// 1st :
// function caller(fn){
//     setTimeout(fn,3000);
// }
// caller(function(){
//     console.log("Print after 3 seconds")
// })

//2nd:
// Implementation of own map function:

// function ownMap(arr, fn){
//     let newarr = [];
//     for(let i = 0; i < arr.length; i++){
//         newarr.push(fn(arr[i]));
//     }
//     return newarr
// }
// let arr = [1,2,3,4,5,6];

// let mapCaller = ownMap(arr,function(value){
//     return value + 3;
// }) 

// console.log(mapCaller);


// 3rd:
// function counter(){
//     let count = 1;
//     return function(){
//         return count++;
//     }
// }

// let count = counter();
// console.log(count());
// console.log(count());
// console.log(count());

//4:

function limiter(fn, limit){
    let count  = 0;
    return function(){
        if(count < limit){
            console.log(`counter: ${count}`)
            count++
            fn()
        }
    }
}

let limit = limiter(function(){
    console.log("Limiter")
},3)

limit()
limit()
limit()
limit()
