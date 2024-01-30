// You are provided with two numbers. Find and print the smaller number.

// Input Description:
// You are provided with two numbers as input.

// Output Description:
// Print the small number out of the two numbers.

// Sample Input :
// 23 1
// Sample Output :
// 1

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

  var cons1=userInput[0].split(' ');
  
 var con1=parseInt(cons1[0]);
 var con2=parseInt(cons1[1]);
 if(con1>con2){
     console.log(con2);
 }
 else if(con2>con1){
     console.log(con1);
 }

  //end-here
});