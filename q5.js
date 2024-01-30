// You are provided with a number, "N". Find its factorial.

// Input Description:
// A positive integer is provided as an input.

// Output Description:
// Print the factorial of the integer.

// Sample Input :
// 2
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

  var cons1=userInput[0];

    if(cons1[0]!='-' && cons1!=0){
        var consNum=parseInt(cons1);
        //console.log();
        //console.log();
    }
    var i=1;
    var fac=1;
    while(i<=consNum){
        fac=fac*i;
        i++;
    }
    console.log(fac);

  //end-here
});