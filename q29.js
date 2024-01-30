// Write a code to get an integer N and print the even values from 1 till N in a separate line.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the even values from 1 to N in a separate line.

// Sample Input :
// 6
// Sample Output :
// 2
// 4
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

  var con1=parseInt(userInput[0]);
var i=1;
while(i<=con1){
    if(i%2==0){
        console.log(i);
        
    }
    i++;
}

  //end-here
});