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