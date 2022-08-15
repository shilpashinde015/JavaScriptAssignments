//Program 1- Write a program to add 2 numbers and print the result on the console.
let num1 = 10
let num2 = 20
console.log("result", num1 + num2)

//Program 2- Write a program to subtract 2 numbers and print the result on the console.
let num3 = 10
let num4 = 20
console.log("result", num1 - num2)

//Program 3- Write a program to display student results. If the number is below 50 then print fail and if the number is above 50 then pass.
const marksstr = prompt("Please Enter the Marks !")
let marks = Number(resultstr)

let result = marks < 50 ? "Student Fail":"Student Pass"
alert(result)

//Program 4- Write a program to display student results. 
const prompt = require("prompt-sync")();
const arg = prompt("Enter the marks? "); 
//arg = 99
switch(true){
    
    case arg > 90:
        console.log("Grade A");
        break;
    case arg >70 && arg < 90:
        console.log("Grade B")
        break;
    case arg >50 && arg < 70:
        console.log("Grade C")
        break;
    case arg < 70 :
        console.log("Fail")
        break;
    default :
    console.log("Please enter the number !")
}
//Program 5- Write a function that takes 3 numbers as arguments and perform multiplication of the numbers and returns the output. 

function mulfun(a,b,c){
    return a *b * c
}
console.log(mulfun(1,2,3))

