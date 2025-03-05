// function callerfnc(fn){
//     // setTimeout(fn,3000)
// }

// callerfnc(function(){
//     // console.log("Hey")
// })

// Implemention of own map

let arr = [1,2,3,4,5,6];

function mapcopy(arr, fn){
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        newarr.push(fn(arr[i]));
    }
    return newarr;
}

let ans = mapcopy(arr, function(value){
    return value+2;
})

// console.log(ans);


// function to craete a counter using closure

function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

let makecount = counter();
// makecount();

function fnlimiter(fn, limit){
    let totalcalled = 0;
    return function(){
        if(totalcalled < limit){
            totalcalled++;
            fn();
        }
    }
}

let limiter = fnlimiter(function(){
    console.log("hi");
}, 3);

limiter()
limiter()
limiter()
limiter()
