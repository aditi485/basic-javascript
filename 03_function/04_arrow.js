 const user ={
    username: "aditi tripathi",
    price : 999,
    message : function(){
        console.log(` ${this.username} , welocme to website`)// this is used to refer that current context value
        console.log(this) // this will refer to same context
    }
 }
 user.message() 
 user.username = "itisha tripathi"
 user.message() 
 console.log(this)// here in node it will return {} empty object but in browser it will return window
   

 // function ke andr this will not work

 function chai(){
    let username = "hitesh"
    console.log(this.username) //this will return undefined
 }
 chai()

 // in arrow function or in normal we can not use the this 
 const coffee = () =>{
    let username = "hitesh"
    console.log(this.username)  
 }
 coffee()

 // how arrow function are made 
 const addTwo =(num1,num2) =>{
    return num1+num2;
 }
 console.log(addTwo(34,56))

 //if we have to writw a function in a single line then 
 const addtwo = (num1,num2) => (num1+num2) // if curly braces is used then u have to write a return keyword but if paranthesis is used no need to write it
 console.log(addtwo(3,4))