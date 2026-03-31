function myname(){
    console.log("a")
    console.log("d")
    console.log("i")
    console.log("t")
    console.log("i")
}
myname // if u will pass this no value will be return only refrence of function is pass 
myname()

function addTwoNumber(number1 ,number2){
    console.log(number1+number2)
}
addTwoNumber(3,5)
// BUT IF WE DO SO 
addTwoNumber(3,"4")//34
addTwoNumber(3+null)//nan. // so we have to check the argument pass is number or not


// if we want to store the value 
const result = addTwoNumber(3,8)  // when u do return then only you can store the value in new variable
console.log(result) // result = undefined becoz function is not returning the value


function sum( num1 ,num2){
    return num1+num2;
}
 const result1 = sum(67,89)
 console.log(result1)

 function loginUserMessage(username){
    if (username === undefined){
        console.log ("please enter username")
        return
    }
    return `${username} just logged in`
 }
 console.log(loginUserMessage("aditi tripathi"))
  console.log(loginUserMessage()) // if user doesnot pass anything 


  // we can also pass the default value 
function loginUserMessage(username = "sam"){
    if (username === undefined){
        console.log ("please enter username")
        return
    }
    return `${username} just logged in`
 }
 console.log(loginUserMessage("aditi tripathi"))
  console.log(loginUserMessage()) // now its value will never be undefined it will give sam as default value
  