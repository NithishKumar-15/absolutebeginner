// You will be provided with a number. Print the number of days in the month corresponding to that number.

// Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

// Input Description:
// The input is in the form of a number.

// Output Description:
// Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

// Sample Input :
// 8
// Sample Output :
// 31

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

  const num1=Number(userInput[0]);
 
 switch(num1){
     case 1:
         console.log('31');
         break;
        case 2:
         console.log('28');
         break;
         case 3:
         console.log('31');
         break;
         case 4:
         console.log('30');
         break;
         case 5:
         console.log('31');
         break;
         case 6:
         console.log('30');
         break;
         case 7:
         console.log('31');
         break;
         case 8:
         console.log('31');
         break;
         case 9:
         console.log('30');
         break;
         case 10:
         console.log('31');
         break;
         case 11:
         console.log('30');
         break;
         case 12:
         console.log('31');
         break;
         default:
         console.log('Error')
             
 }

  //end-here
});