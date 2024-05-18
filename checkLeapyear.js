const prompt = require('prompt-sync')();
let year = parseInt(prompt("Enter the year : "));
function isLeap(year){
    if (year%4 == 0){
        if(year %100 == 0){
            if(year% 400 == 0){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}
var res = isLeap(year);
if (res == true){
    console.log("this is leap year");
}
else{
    console.log("its a normal year");
}