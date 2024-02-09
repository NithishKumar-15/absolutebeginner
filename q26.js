// Write a code get an integer number as input and print the odd and even digits of the number separately.

// Input Description:
// A single line containing an integer.

// Output Description:
// Print the even and odd integers of the integer in a separate line.

// Sample Input :
// 1234
// Sample Output :
// 2 4
// 1 3

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

    var num1=userInput[0].split('');
 var num2='';
 var num3='';
 for(let a1 of num1){
     if(parseInt(a1)%2==0){
         num2=num2+" "+a1
     }
     else{
         num3=num3+" "+a1;
     }
 }
var arr1=num2.trim().split(' ');
var arr2=num3.trim().split(' ');

var i=0;
var i1=0;
while(i<arr1.length){
    arr1[i]=Number(arr1[i]);
    i++;
}

while(i1<arr2.length){
    arr2[i1]=Number(arr2[i1]);
    i1++;
}
console.log(arr1.sort((a, b) => a - b).join(' '));
console.log(arr2.sort((a, b) => a - b).join(' '));
});