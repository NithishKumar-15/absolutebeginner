// Write a code to get 2 integers A and N. Print the integer A, N times in separate line.

// Input Description:
// First line contains an integer A. Second line contains an Integer N.

// Output Description:
// Print the integer A, N times in a separate line.

// Sample Input :
// 2 3
// Sample Output :
// 2
// 2
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

  var con1=userInput[0].split(' ');
  var num1=parseInt(con1[0]);
  var num2=parseInt(con1[1]);
  
  for(i=0;i<num2;i++){
      console.log(num1);
  }

  //end-here
});