// // ES6

// class user{
// // jaise hi class se object initalies hoga constructor apne aap call ho jayega
//       constructor(username, email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//       }// these are called methods here
    
//       encryptPassword(){
//         return`${this.password}abx`
//       } // these are called methods here not a function   

//       changeusername(){
//         return `${this.username.toUpperCase(

//         )}`
//       }

// }
// const chai = new user ("aditi","aditi@gmail.com",123)
// console.log(chai.encryptPassword());
// console.log(chai.changeusername());


// behimnd the scene what all is happening
function user(username,email,password){
    this.username= username;
    this.email= email;
    this.password = password;

}
user.prototype.encryptPassword = function()
{
    return `${this.password}a@3`
}
user.prototype.changeusername = function(){
    return`${this.username.toUpperCase()}`
}
const tea = new user("itiasha","iti@gmail",12+"wed")
console.log(tea.encryptPassword())