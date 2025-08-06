// Q1..Write a function called greet that takes a name as a parameter and returns "Hello, [name]!"
// function greet(name){
//     console.log("Hello, ", name)
//     return "Hello, " + name +' '+"Sir " + 'ji';
// }
// console.log(greet("Zain"));


// Q2..Create a function add that takes two numbers and returns their sum
// function add(a, b){
//     return a+b;
// }


// Q3..Write a function isEven that returns true if a number is even and false if odd
// console.log(add(9,10));
// function isEven(num){
//     if (num % 2 == 0 ){
//         return true;
//     } else return false;
// }
// console.log(isEven(11));


// Q4..Use a for loop to print numbers from 1 to 10
// for(let i=1; i<=10; i++){
//     console.log(i);
// }


// Q5..Use a while loop to print even numbers between 0 and 20
// let i = 1;
// while(i<=20){
//     if(i%2==0){
//         console.log(i)
//     }
//     i++
// }


// Q6..Write a loop that prints the multiplication table for 5 (up to 5×10)
// let i = 5;
// let j = 1
// while (j<=10){
//     console.log(i*j);
//     j++
// }


// Q7..Write a function checkAge that takes an age and returns "Child" if age < 13, "Teen" if 13-19, "Adult" otherwise
// function checkAge(age){
//     if (age < 13){
//         return "child";
//     }
//     else if(age >=13 && age <= 19){
//         return "teen";     
//     else{
//         return "Adult"
//     }
// }
// console.log(checkAge(6));


// Q8..Create a function compare that takes two numbers and returns the larger one
// function compare(a, b){
//     if (a > b){
//         return a;
//     }else{return b;}
// }
// console.log(compare(10, 15));


// Q9..Write a function isPositive that returns true if a number is positive, false otherwise
// function isPositive(num){
//     if(num >=0 ){
//         return "Positive"
//     }else{return "Negative"}
// }
// console.log(isPositive(-1));


// Q10..Create an array of 5 numbers and write code to print each element
// Q11..Write a function findMax that takes an array of numbers and returns the largest number
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(Math.max(...arr));
// let arr =  [2, 3, 2, 4, 5, 7, 8, 9, 5, 2, 2, 4, 5];


// Q12..Create a function sumArray that calculates the sum of all numbers in an array
// let arr = [1,2,3,4,5]
// function sumArray(arr){
//     sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(sumArray(arr));


// Q13..What is the difference between == and ===?
// let x = 2; 
// let y = "2";
// console.log(x === y);


// Q14..Write code that demonstrates the difference between ++x and x++
// let a = 2;
// b = a++
// console.log(b, a);


// Q15..Use the ternary operator to write a one-line function isAdult that returns true if age ≥ 18
// function isAdult(num){
//     return num > 18 ? "Adult" : "Children";
// }
// console.log(isAdult(13));

// let arr = [1, 3, 5, 7, 2, 6, 3, 2,];
// for (let a of arr){
//     console.log(a);
// }