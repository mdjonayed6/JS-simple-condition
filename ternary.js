/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


/**
 * Simple if-else Operator
 */

// let num1 = 23;
// let num2 = 20;

// let num3 = num1 *2;
// let sum = num1 + num2;

// if (num1 > num2) {
//     console.log("Your result ", num3);
// }
// else if (num1 < num2) {
//     console.log("sum ", sum);
// }


//************************************************ */
/**
 * Ternary Operator
 */
let num1 = 23;
let num2 = 20;

let result = (num1 > num2) ? num1 *2 : num1 + num2;
console.log("result", result);