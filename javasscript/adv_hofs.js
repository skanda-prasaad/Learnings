// Q-1
// function execute(fn, time){
//     setInterval(fn,time);
// }

//  execute(function(){
//     console.log("Hello World")
// },2000);

//Q-2 :

// function greetfnc(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

// let greet = greetfnc("Hello");
// greet("Skanda");
// greet("Ram");


// function runOnce(cb){
//     let execute = false;
//     return function(){
//         if(!execute){
//             execute = true;
//             cb();
//         }
//     }
// }

// let run = runOnce(function(){
//     console.log("Run only once");
// })

// run();
// run();
// run();

function throt(fn, time){
    let lastcall = 0;
    return function(){
        let current = Date.now();
        if(current - lastcall >= time){
            lastcall = current;
            fn();
        }
    }
}

let throtttt = throt(function(){
    console.log("Run after 2 sec");
},2000);

throtttt();
throtttt();
throtttt();

