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

function fun(x, fn){
    for(let i = 0; i < x ; i++){
        console.log(i);
        // return i;
    }
    fn();
}
fun(10, function ecept(){
    console.log("i am executed here");
})
