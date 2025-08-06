// let a = 11;
// if (a % 2 == 0){
//     console.log("Even");
// } else{
//     console.log("Odd");
// }

// let a = 100;
// let b = 12;
// let c = 51;
// if (a < b && a < c){
//     console.log(a);
// } else if (b < a && b < c){
//     console.log(b);
// } else {
//     console.log(c);
// }

// let a = 100;
// let b = 100;
// let c = 100;
// if (a == b && b == c && c == a ){
//     console.log("Equilateral Triangle");
// } else if (b==a || b==c || c==a ){
//     console.log("isoceles triangle");
// } else {
//     console.log("Scalene triangle");
// }

// let i = 1;
// while (i <= 100){
//     console.log(i);
//     i++
// }

// let ans = 0;
// let i = 1;
// while (i<=10) {
//     ans += i;
//     i++
// }
// console.log(ans);

// for( let i=1; i<=10; i++){
//     ans+=i;
// }
// console.log(ans);

// for(let i=1; i<=25; i++){
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

// for(let i=1; i<=25; i++){
//     if (i % 2 != 0){
//         console.log(i);
//     }
// }

// function isEvenOrOdd (num){
//     if(num % 2 == 0){
//         return ("Even");
//     } else {
//        return ("Odd")
//     }
// }

// let x =121;
// console.log("X is ", isEvenOrOdd(x));

// for(let i = 1; i <= 50; i++ ){
//     console.log(i, "is", isEvenOrOdd(i));
// }

// function isPrime(x) {
//   for (let i = 2; i <= x - 1; i++) {
//     if (x % i == 0) {
//       return false;
//   }
//   }
//   return true;
// }
// console.log(isPrime(12));

// function isPrimee (x){
//     let i=2;
//     while( i <= x-1 ){
//         if ( x % i == 0){
//             return false;
//         }
//         i++
//     }
//     return true;
// } 
// // console.log(isPrimee(12));

// // TODO
//     // CREATE A ANONYMOUS FUNCTION WHERE YOU'LL BE PASSING A NO=X IN isPrimee() AND BASED ON THAT YOU'LL PRINT A VERBAL RESPONSE

// (function (num){
//     if (isPrimee(num)){
//         console.log(num,"is a prime number");
//     } else {
//         console.log(num,"is not a prime number");
//     }

// })(7)

// var a = -4;
// let y = -a;
// console.log(a, typeof y);
// console.log(y);


// function isPrimeee(num){
//     if (num %2 == 0 ){
//         return true;
//     }
//     return false;
// }
// console.log(isPrimeee(18));

// function isPalindrome(num){
//     let str = "" + num;
//     let i = 0;
//     let j = str.length-1;
//     while(i <= j){
//         if(str[i] == str[j]){
//             i++;
//             j--;
//         }
//         else{
//             return str + "is not palindrome";
//         }
//     }
//     return str + " is palindrome";
// }
// console.log(isPalindrome("naman"));
// function swap(arr, i, j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
// let arr = [1,1,0,1,0,0,1,0,1];
// function inLine(arr){
//     let i = 0;
//     let j = arr.length-1;
//     while(i <= j){
//         if (arr[i] == 1){
//             swap(arr, i, j);
//             j--
//         } else{
//             i++
//         }
//     }
// }
// inLine(arr);
// console.log(arr);


// let arr = [,,,,];
// let arr1=[1,2,3,4];
// let arr2 = [[1,2,3],[4,6,6]];
// console.log(arr.length);
// console.log(arr1.length);
// console.log(arr2.length);


                                       //scoping 
// function fun(){
//     var x = 10;
//     function gun(){
//         var y = 20;
//         console.log(x);
//         console.log(y);
//     }
//     gun()
//     console.log(x); 
//     console.log(y);
// }
// fun();

//without using strict mode
// {
//     function fun(){
//         return "123";           //we can call function anywhere
//     }
// }
// console.log(fun); function fun

//using strict mode
// {
//     function(){
//         return "123";
//     }                           //we cannot call function outside curly braces 
//     console.log(fun); // function fun
// }
// console.log(fun); // throw error


// var teacher = "sanket"; //teacher -> global 
// function fun(){ // fun -> global
//     console.log(teacher);
//     var teacher = "pulkit"; // teacher -> fun scope ---> its a function scope which means we can only use it in this function and we can call it even before declaration cause we use (var) 
//     let content = "js"; // content -> fun scope ---> isa a block scope which means we call only use it in curly braces and only after declaring the variable cause we use (let)
//     if(content == "js"){ 
//         let hours = "120+" 
//         console.log(hours);
//     }
//     console.log(teacher, content);
// }
// fun();
// console.log(teacher);
// // console.log(content);

// function fun(){
//     //function declaration --> if the first word is function 
// }

// let a = function fun(){
//     //named function expression --> if the first word is not function
// }   //it improves readeablity of code , and for recursive cases named function expression is mandatory

// let f = function(){
//     //anonymous function expression --> if the first word is not function 
// }   // its pretty hard to debug anonymous function expression 

// (function x(){
//     //function expression
// })

// (function (){
//     //function expression
// })

// //map function 

// // function square(f){
// //     return f*f;
// // }
// let arr = [1,2,3,4,5];
// // let result = arr.map(square)
// // console.log(result);

// let arr = [1,2,3,4,5];
// function isEvenOrOdd(x){
//     if(x % 2 == 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// let isevenorodd = arr.map(isEvenOrOdd);
// console.log(isevenorodd);

// let a = [1, 3, 110, 14, 2, 87, 96,34,75, 75, 45, 34, 1100];
// //if a < b --> a-b will be negative --> if cmp function gives negative then a is placed before b (a<b)
// //if a > b --> a-b will be positive --> if cmp function gives positive then a is placed after b (a>b)
// a.sort(function(a,b){
//     return a-b;
// })
// console.log(a);

// let a = [1, 3, 110, 14, 2, 87, 96,34,75, 75, 45, 34, 1100];
// a.sort();
// console.log(a);

// const newArr = [9, 8, 7, 6, 5]
// function print(element, indx){
//     return `Element at index ${indx} is ${element}`;
// }
  
// function customMapper(arr, func){
//     let result = [];
//     for (let i = 0; i < arr.length; i++ ){
//         result.push(func(arr[i], i));
//     }
//     return result;
// }
// const value = customMapper(newArr, print);
// console.log(value);


// const newArr = [9, 8, 7, 6, 5]
// function print(element, indx){
//     return `Element at index ${indx} is ${element}`;
// }
// const result2 = newArr.map(print)
// console.log(result2);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function oddOrEven(x){
//     return (x %2 == 0);
// }
// const result = arr.filter(oddOrEven)
// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6];
// function sum (previousResult, currValue){
//     return previousResult + currValue;
// }
// const result = arr.reduce(sum);
// console.log(result);

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

// console.log("Hello World");
// setTimeout(function exec(){
//     console.log("Timer Starts");
// },0);
// console.log("Bye");

// console.log("Hello World");
// for(let i= 0; i < 3; i++){
//     setTimeout(function exec(){
//     console.log("Timer Done");
// },0);
// }
// for(i=0; i <1000000000; i++){  
// }
// console.log("Bye");

// x = setInterval(function setIntervalDemo(){
//     console.log("hi");
// }, 1000);
// console.log(typeof(x));

// function fun (x, fn){
//     console.log(x);
//     fn()
// }
// fun(10, function exec(){
//     console.log("Zain");
// });


// function getRandomInt(max){
//     return Math.floor(Math.random() * max);

// }


// function PromiseWithLoop(){
//     return new Promise(function execution(resolve, reject){
//         for (let i = 0; i < 5000000000; i++){}
//         let num = getRandomInt(10);
//         if (num % 2 == 0){
//             resolve(num);
//         }else{
//             reject(num);
//         } 
//     });
// }
// let x = PromiseWithLoop();
// console.log(x);

// function PromiseWithLoop(){
//     return new Promise(function execution(resolve, reject){
//         setTimeout(() => {
//             let num = getRandomInt(10);
//         if (num % 2 == 0){
//             resolve(num);
//         }else{
//             reject(num);
//         } 
//         }, 2000);
        
//     });
// }
// let x = PromiseWithLoop();
// console.log(x);
// x.
// then(
//     function fulfillment(value){console.log("fulfilled", x);;}, 
//     function rejection(value){"rejected", x}
// );



// console.log("Hi"); 
// setTimeout(function (){
//     console.log("first");
//     setTimeout(() => {
//         console.log("second");
//     }, 2000);
//     console.log("bye");
// }, 1000);
// console.log("secondHi")
// setTimeout(()=>{
//     console.log("Third");
// },3000)
// console.log("bye2");

// console.log("App started");

// setTimeout(() => {
//     console.log("🔄 Showing loader...");

//     setTimeout(() => {
//         console.log("✅ User data received from API");

//         Promise.resolve().then(() => {
//             console.log("💾 Token stored in localStorage");
//         });

//         console.log("🎉 Welcome User!");
//     }, 2000); // Simulating API call

// }, 1000); // Delay before showing loader

// console.log("App still running...");

// setTimeout(() => {
//     console.log("📦 Background sync done");
// }, 3000);

// console.log("End of script");
// app started
// app still running
// end of script
// showing loader
// token stored in localstorage 
// background sync done
// user data recieved from apis
// welcome user

// setTimeout(() => {
//         console.log("✅ User data received from API");

//         Promise.resolve()(() => {
//             console.log("💾 Token stored in localStorage");
//         });

//         console.log("🎉 Welcome User!");
//     }, 2000); // Simulating API call

// function fetchData(url) {
//     return new Promise(function (resolve, reject) {
//         console.log("Started downloading from", url);
//         setTimeout(function processDownloading() {
//             let data = "Dummy data";
//             resolve(data);
//             console.log("Download completed");
//         }, 7000);
//     });
// }

// console.log("Start");
// let promiseObj = fetchData("skfbjkdjbfv");
// promiseObj.then(function A(value) {
//     console.log("value is", value);
// })
// console.log("end");


// console.log("Start of the file");
// setTimeout( function timer1(){
//     console.log("Timer1 Done");
// }, 0);

// for (let i = 0; i < 100000000; i++){
// }
// let x = Promise.resolve("Sankets Promise");
// x.then(function processPrommise(value){
//     console.log("Whose Promise?", value);
// });
// setTimeout( function timer2(){
//     console.log("Timer2 Done");
// }, 0);
// console.log("End of the file");

// 


// function blockingLoop(){
//     for (let  i = 0; i < 10000000000; i++);
// }
function getRandomInt(max){
    return Math.floor(Math.random() * max);

}

function PromiseWithLoop(){
    return new Promise(function execution(resolve, reject){
        setTimeout(() => {
            let num = getRandomInt(10);
        if (num % 2 == 0){
            resolve(num);
        }else{
            reject(num);
        } 
        }, 2000);
        
    });
}

let x = PromiseWithLoop();
console.log(x);
x.
then(
    function fulfillment(value){console.log("fulfilled", x);}, 
    function rejection(value){"rejected", x}
);
async function run() {
    try {
        let result = await PromiseWithLoop();
        console.log("Fulfilled with:", result);
    } catch (error) {
        console.log("Rejected with:", error);
    }
}
console.log(run()); 