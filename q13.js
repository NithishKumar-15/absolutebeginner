// Let "A"  be a string. Remove all the whitespaces and find it's length.

// Input Description:
// A string is provide as an input

// Output Description:
// Remove all the whitespaces and then print the length of the remaining string.

// Sample Input :
// Lorem Ipsum
// Sample Output :
// 10

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

  var con1=userInput[0];
  var str='';
  var i=0;
  while(i<con1.length){
      if(con1[i]!=' '){
          str=str+con1[i];
      }
      i++;
  }
  //console.log(userInput[0].length);
 

console.log(str.length);

  //end-here
});