//Write a program to accept 2 numbers and print the sum on HTML
/*var data1 = prompt("Enter the First Numbers: "); 
var data2 = prompt("Enter the Second Numbers: ");  
var data1 = parseInt(data1);  
var data2 = parseInt(data2); 

if(isNaN(data1) || isNaN(data2)) //check empty data field
    {
      alert("Please enter both values");
      }else{
       let sum = data1+data2;
       alert("Your'e sum value is : "+sum);
       }


const prompt = require("prompt-sync")();
while(true){
const age = prompt("Please Enter the age !")
let agedata = Number(age)
console.log(agedata)

try {
    if(isNaN(agedata)) {throw "Not a number!" }
    else if(agedata < 21) {
            throw ("Have some patience, Please enter your age !")
    }else {
          break;
        throw ("You are Eligible !")
      
    }
}catch(e){
    alert(e);
}
}*/

//Program 3- Display Course Information
/*class Courses{

    constructor(CourseName,Price,Validity,TrainerName, PhoneNumber){
        this.CourseName = CourseName;
        this.Price = Price;
        this.Validity = Validity;
        this.TrainerName = TrainerName;
        this.PhoneNumber = PhoneNumber;
    }
    showDetails(){
        return "Thank you for showing interest in " + this.CourseName  +" Course " + ' Current Price is ' + this.Price +  ' and validity of course is till ' + this.Validity +'If you have any query then reach out to ' +  this.TrainerName + ' on mobile ' + this.PhoneNumber;
    }   
        
 }


 const mycourse = new Courses("Javascript",1000,"Dec 2022","Mukesh","000-000-000" );
 console.log(mycourse.showDetails());*/

//Program 4- Write the same program with getter method
class Courses{
  constructor(coursename,price,trainerName,phoneNumber,Validity){
    this.coursename = coursename;
    this.price = price;
    this.phoneNumber = phoneNumber;
    this.Validity = Validity;
    this.trainerName = trainerName;
  }
  
  //Getter
  get usercourseName(){
    return this.coursename;
  }
//setter
  set usercourseName(updateName){
    this.coursename = updateName;
  }




  //Getter
  get userprice(){
    return this.price;
  }
//setter
  set userprice(updatePrice){
    this.price = updatePrice;
  }

  //Getter
  get userphoneNumber(){
    return this.phoneNumber;
  }
//setter
  set userphoneNumber(updatephoneNumber){
    this.phoneNumber = updatephoneNumber;
  }

  //Getter
  get userValidity(){
    return this.Validity;
  }
//setter
  set userValidity(updateValidity){
    this.Validity = updateValidity;
  }

  get trainer(){
    return this.trainerName;
  }
//setter
  set usertrainer(updatetrainer){
    this.trainerName = updatetrainer;
  }


  showDetails(){
    return "Thank you for showing interest in " + this.coursename  +" Course " + ' Current Price is ' + this.price +  ' and validity of course is till ' + this.Validity +' If you have any query then reach out to ' +  this.trainerName + ' on mobile ' + this.phoneNumber;
  }   
}


const mycourse = new Courses("Javascript",1000,"Mukesh","000-000-000","Dec 2022" );
console.log(mycourse.coursename);
//console.log(mycourse.showDetails());
mycourse.coursename="C#"
//console.log(mycourse.showDetails());
console.log(mycourse.coursename)

const usr1 =  new Courses("Java",100,"sam","000-000-000","Dec 2022" );
const usr2 =  new Courses("C++",100,"ram","000-000-000","Dec 2022" );
const usr3 =  new Courses("C#",100,"drek","000-000-000","Dec 2022" );


module.exports = {usr1,usr2,usr3}
//export{usr1,usr2,usr3}

//Create object.
//const newUser = new Courses('Java');
//Get name.
//console.log(newUser.coursename); 
//Set name.
//newUser.coursename = 'C++';
//console.log(newUser.coursename); 

