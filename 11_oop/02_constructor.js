// here new keyword is constructor function => this allows that from one object literal we can make a multiple instance
function user(username,loggedIn,loginCount){
    this.username = username;// here we have done this.username becoz this is an empty object 
    this.isloggedIn = loggedIn;
    this.loginCount = loginCount

    return this// this is not necessary 

}
const userone = new user("aditi",true , 12) // creating new instance by using new keyword 
const usertwo = new user("itisha",false,89)
console.log(userone)
console.log(usertwo)
console.log(userone.constructor);// refrence hota hai khud hi ke bre me

// whenever we use new keyword empty object is created called as instance.

///++++++++++++++++++++new keyword



// javascript behavior is prototype behaviour(mechanism of javascript)
// javaScript default behavior is protypal behavior. => new keyword and classes , this, inheritance all we get from prototype
 // array -> object -> null
 // string -> object -> null
 // function -> object ->null
 function multiplyby5(num){
    return num*5;
 }
 multiplyby5.power = 2// here we are applying object property and it is inheriting it
console.log(multiplyby5(5))
console.log(multiplyby5.power)// 
console.log(multiplyby5.prototype);

function createuser (username,price){
   this.username= username;
   this.price = price;
}
// here function is also a object so we can apply functionalities here
createuser.prototype.increment=function(){
   console.log(this.price);
}
createuser.prototype.printme = function(){
   console.log(`the price is ${ this.price}`)// use of this here will tell joh aaya uska price
}
const chai = new createuser("chai",35); // use of new keyword is mandatory.otherwise  it will give an error undefined
const tea = new createuser("tea",250); 
tea.increment()
chai.printme()


/* new  keyword => what happens behind the scene

A new object is created: the new keyword intiates the creation of a new javascript object.
A prototype is linked : the newly created object gets linked to the prtotype property of the constructor function. This means to access to properties and 
