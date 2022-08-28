<html>  
<head>  
<script>  
var data1 = prompt("Enter the First Numbers: "); 
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
</script>  
</head>  
</html>


try{
    if(isNaN(agedata)) throw "its not a number"
    else if(agedata < 21) throw "Have some patience" 
    
}catch(e){
        alert("Please enter the appropriate age !")
    }
}
//alert("Please enter the age greater than 21 !")




//Program 2- Marriage Eligible Calculator 
const prompt = require("prompt-sync")();
const age = prompt("Please Enter the age !")
let agedata = Number(age)
console.log(agedata)
try{
    if(isNaN(agedata)) { throw "its not a number"}
    else if(agedata < 21) {throw ("Have some patience")}
    else {alert("Please enter the appropriate age !")}
}catch(e){
       alert("Error" + e)
    }*/
   
   class Courses{

   /* constructor(CourseName,Price,Validity,TrainerName, PhoneNumber){
        this.CourseName = CourseName;
        this.Price = Price;
        this.Validity = Validity;
        this.TrainerName = TrainerName;
        this.PhoneNumber = PhoneNumber;
    }*/
    constructor(CourseName){
      this.CourseName = CourseName;
    }
     //Getter
  get CourseName(){
    return this.CourseName;
  }
 /* get Price(){
    return this.Price;
  }
  get Validity(){
    return this.Validity;
  }
  get TrainerName(){
    return this.TrainerName;
  }
  get PhoneNumber(){
    return this.PhoneNumber;
  }*/
  
//setter
  set CourseName(updateCourseName){
    this.CourseName = updateCourseName;
  }
  /*set Price(updatePrice){
    this.Price = updatePrice;
  }
  set TrainerName(updateTrainerName){
    this.TrainerName = updateTrainerName;
  }
  set PhoneNumber(updatePhoneNumber){
    this.PhoneNumber = updatePhoneNumber;
  }
  set Validity(updateValidity){
    this.Validity = updateValidity;
  }*

    showDetails(){
        return "Thank you for showing interest in " + this.CourseName  +" Course " + ' Current Price is ' + this.Price +  ' and validity of course is till ' + this.Validity +'If you have any query then reach out to ' +  this.TrainerName + ' on mobile ' + this.PhoneNumber;
    }*/
    
}

 const newUser = new Courses('C++')
 newUser.PhoneNumber = '444-444-444';
 newUser.Price = 100;
 newUser.TrainerName = "sh";
 newUser.Validity = "Dec 2022";
console.log(newUser.showDetails)