// Print the First 3 multiples of the given number "N". (N is a positive integer)

// Note: print the characters with a single space between them.

// Input Description:
// A positive integer is provided to you as an input.

// Output Description:
// Print the First 3 multiples of the number with single spaces between them as an output.

// Sample Input :
// 2
// Sample Output :
// 2 4 6

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

    if(cons1[0]!='-' && cons1!=0){
        var consNum=parseInt(cons1);
        console.log(consNum*1,consNum*2,consNum*3);
        //console.log();
        //console.log();
    }
  //end-here
});