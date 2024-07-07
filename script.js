// JAVASCRIPT PRACTICE PROBLEMS

// 1. TABLE PRINT KARE
// DESCRIPTION: user se koi number le and uska table 10 tk print kare
// var userInp = +prompt("Please enter a number");
// for (var i = 1; i <= 10; i++) {
//     console.log(userInp + " * " + i + " = " + (userInp * i));
// }
// 2. ARRAY ELEMENTS KA SUM PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements ka sum find kar k print kare
// let numbers = [];
// let sum = 0;
// for (var i = 0; i < 5; i++) {
//     var userInput = +prompt("Enter a number");
//     numbers.push(userInput);
//     sum = userInput + i;
// }
// // console.log("The numbers you entered are:", numbers);

// console.log("The sum of the number is:", sum);
  
// 3. ARRAY KA SUB SE BARA NUMBER PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements me SUB SE BARA NUMBER find kar k print kare
// var numbers = [];
// var largestNum = 0;
// for (var i = 0; i < 5; i++) {
//   var userInput = +prompt("Enter number");
//   numbers.push(userInput);
//     if (userInput > largestNum) {
//         largestNum = userInput;
//     }
// }
// console.log("These are the numbers:", numbers);
// console.log("This is the largest number:", largestNum);
// 4. USER SE STRING LE AND USKO ULTA PRINT KARE
// DESCRIPTION:
// 1. user se koi b string input le
// 2. usko reverse me print karde e.g: mehtab -> bathem
// var userInput = prompt("Enter a string");
// let reversedString = "";
// for (var i = userInput.length - 1; i >= 0; i--) {
//     reversedString += userInput[i];
// }
// console.log("The reversed string is:", reversedString);
// reversedString += userInput[i];
// 5. FACTORIAL
// DESCRIPTION:
// 1. user se koi b NUMBER input le
// 2. us number ka factorial find kr k print kare
// 3. factorial def:
// the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
// 4 * 3 * 2 * 1 = 24
var userInput = +prompt("Enter a number");
var factorial = 1;
for (var i = 1; i <= userInput; i++) {
    factorial *= i;
}
console.log("The factorial of " + userInput + " is:"  + factorial);