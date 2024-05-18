const prompt = require('prompt-sync')();
let input = prompt("input salary , split by commas : ");
let payments = input.split(',').map(Number);
let livingCost = parseInt(prompt("Enter the living Cost : "));
//function defined
function monthlySavings(payments,livingCost){
    // if(typeof Array.isArray(payments) == false || typeof livingCost != 'number'){
    //     return "invalid input";
    // }
    let salayInMonth = 0;
    for(let i = 0;i<payments.length;i++){
        let element = payments[i];
        // console.log(element);
        // console.log(payments.length)
        if(element >= 3000){
            salayInMonth += (element*80)/100;
        }
        else{
            salayInMonth += element;
        }
        // console.log(salayInMonth);
    }
    if (salayInMonth >= livingCost){
        return salayInMonth - livingCost;
    }
    else{
        return "earn more";
    }
}
let ans = monthlySavings(payments,livingCost);
console.log(ans);

// // console.log(isobj("om"));
// // if(typeof [] != 'number'){
// //     console.log("yes");
// // }
// // if(typeof 5 != 'object'){
// //     console.log("double yes");
// // }
// let obj = [1, 2, 3];

// if (Array.isArray(obj)) {
//     console.log("Object is an array");
// } else {
//     console.log("Object is not an array");
// }
