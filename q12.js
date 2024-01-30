// You are given Two Numbers, A and B. If C = A + B. Find C.

// Note: Round off the output to a single decimal place.

// Input Description:
// You are provided with two numbers A and B.

// Output Description:
// Find the sum of the two numbers (A + B)

// Sample Input :
// 1
// 1
// Sample Output :
// 2


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
  var sum=num1+num2;
  console.log(Math.round(sum));

  //end-here
});