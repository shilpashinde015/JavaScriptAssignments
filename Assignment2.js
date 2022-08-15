
//Program 1- Write a program to calculate the average of 5 numbers.
function avg(x1,x2,x3,x4,x5){
   if(x1 > 0 && x2 >0 && x3 >0 && x4 > 0 && x5 > 0){
   let result = (x1 + x2 + x3 + x4 +x5) /5
   return result
   }
   else{
      return "Please Enter Positive Value"
   }
}

console.log(avg(10,10,10,10,10))


//Program 2- Write a program to calculate the sum of 5 numbers.
function sum(x1,x2,x3,x4,x5){
   if(x1 > 0 && x2 >0 && x3 >0 && x4 > 0 && x5 > 0){
   let result = x1 + x2 + x3 + x4 +x5
   return result
   }
   else{
      return "Please Enter Positive Value"
   }
}

console.log(sum(10,10,10,10,10))



//Program 3- Write a program that accepts two strings (firstName and lastName) and print final string on the console.
const prompt = require("prompt-sync")();
const firstName = prompt("Enter the Firstname: "); 
const lasttName = prompt("Enter the Lastname: "); 
console.log(printStr(firstName,lasttName))

function printStr(fName,lName){
   let result = fName +" " + lName
   return result
}


//Program 4 -- Write a program to calculate emi
const prompt1 = require("prompt-sync")();
const principle = prompt1("Enter the Principle amount: "); 
const rate = prompt1("Enter the rate: ");
const tenure = prompt1("Enter the tenure: ");
console.log(caclculateEmi(principle,rate,tenure))

function caclculateEmi(p,r,t){
   let val;
   r = r/(12*100);
   t = t * 2;
   val = (p*r*Math.pow(1+r,t)) / (Math.pow(1 + r,t) -1)
   return val;
}

//Program 5- Print even numbers from 0-100
function printEvenNum(range){
   for(let i =0;i<=range;i++){
      if(i % 2 == 0){
         console.log(i + " ")
      }
   }

}

printEvenNum(100)

//Program 6- Print odd numbers from 0-100
function printEvenNum(range){
   console.log("Odd Numbers are :")
   for(let i =0;i<=range;i++){
      if(i % 2 != 0){
         console.log(i + " ")
      }
   }

}

printEvenNum(100)

//Program 7- Create an array of length 5 and store below numbers  1,11,111,222,555 . Write a program to calculate the average of numbers.
let arr =[1,11,111,222,555]
let average = 0
let sumofnum = 0
arr.forEach(additem)
function additem(i){
   sumofnum += i; 
   average = sumofnum /5
}
console.log("avg",average)

//Program 8- Write a program that creates the below Object.
const student = {
   Name : "shilpa",
   College_Name: "xyz",
   Location_ : "abc",
   pincode : 6549090,
   Teacher :{
      teacherName : "Daisy",
      teacherPhone : 1098907,
      teacherSubject : "Math"
   }
};
console.log(student.Name)
console.log(student.Teacher.teacherName)

//Program 8- Write a program that creates the below Object.
const student1 = {
   Name : "shilpa",
   College_Name: "xyz",
   Location_ : "abc",
   pincode : 6549090,
   Teacher :[{
      teacherName : "Daisy",
      teacherPhone : 1098907,
      teacherSubject : "Math"
   }]
};
console.log(student.Name)

   for(let j in student1.Teacher){
      console.log("Teacher Name : " + student1.Teacher[j].teacherName)
   
}