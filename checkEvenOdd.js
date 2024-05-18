const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter your number : "));
if(num % 2==0){
    console.log("the number is Even");
}
else{
    console.log("the number is Odd");
}
