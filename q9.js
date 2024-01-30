// You are given three numbers A, B & C. Print the largest amongst these three numbers.

// Input Description:
// Three numbers are provided to you.

// Output Description:
// Find and print the largest among the three

// Sample Input :
// 1
// 2
// 3
// Sample Output :
// 3

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  var num1=parseInt(userInput[0]);
  var num2=parseInt(userInput[1]);
  var num3=parseInt(userInput[2]);
  
  console.log(Math.max(num1,num2,num3));

  //end-here
});