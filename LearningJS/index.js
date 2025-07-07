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

var a = -4;
let y = -a;
console.log(a, typeof y);
console.log(y);

