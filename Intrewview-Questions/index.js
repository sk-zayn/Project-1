// function sleep (ms){
//     return new Promise((res,rej) =>{
//         setTimeout (res ,ms) 
//     })
// }

// async function Process() {
//     console.log("Hello1");
//     await sleep (2000);
//     console.log("Bye");
// };


// console.log("Hello World");
// for(let i= 0; i < 3; i++){
//     setTimeout(function exec(){
//     console.log("Timer Done");
// },0);
// }
// for(i=0; i <1000000000; i++){  
// }
// console.log("Bye");

// setInterval(function setIntervalDemo(){
//     console.log("hi");
// }, 1000);

// function fun(x, fn){
//     for(let i = 0; i < x ; i++){
//         console.log(i);
//         // return i;
//     }
//     fn();
// }
// fun(10, function ecept(){
//     console.log("i am executed here");
// })

// function getRandomInt(max){
//     return Math.floor(Math.random() * max);
// }
// function PromiseWithLoop(){
//     return new Promise(function execution(resolve, reject){
//         setTimeout(() => {
//             let num = getRandomInt(8);
//         if (num % 2 == 0){
//             resolve(num);
//         }else{
//             reject(num);
//         } 
//         }, 10000);
        
//     });
// }
// let x = PromiseWithLoop();
// console.log(x);
// console.log("Highlight");

// let myPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Hello World")
//     }, 2000);    
// });

// myPromise.then((result) =>{
//     console.log(result);
// });

// let myPromise = new Promise((resolve, reject) => {
//     reject("Something went wrong");
// });

// myPromise.catch((error)=>{
//     console.log(error);
// });
function getRandomNumber(){
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10);
       
        
        if (num % 2 == 0){
        resolve (num)
    }else {
        reject (num )
    }
    }, 1000);

    
    
   });
};

getRandomNumber().then((result) => {
    console.log("resolved"+" " +result);
    
}).catch((error)=>{
    console.log("rejected"+" "+ error);
})


