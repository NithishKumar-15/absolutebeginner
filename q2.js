// You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”.

// (A and B are natural numbers)

// Input Description:
// The inputs are two natural numbers representing the length and the breadth of a rectangle.

// Output Description:
// Find the area of the rectangle formed by the provided input. Round off the answer to the first decimal place if required.

// Sample Input :
// 2
// 3
// Sample Output :
// 6

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

  var cons1=userInput[0];
    var cons2=userInput[1];
    if(cons1[0]!='-' && cons1!=0){
        var consNum=parseInt(cons1);
        //console.log(consNum);
    }
    if(cons2[0]!='-'&& cons2!=0){
        var consNum1=parseInt(cons2);
    }
  console.log(consNum*consNum1);

  //end-here
});