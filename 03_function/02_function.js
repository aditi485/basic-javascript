// if we donot know how many argument we have to pass 
function shoppingcart( ...num1){
    return num1
}
console.log(shoppingcart(200,300,400,5000,78)) // it will return an array [200,300,400,5000,78]
 
 function shoppingcart1( val1,val2,...num1){
    return num1
}
console.log(shoppingcart1(200,300,400,5000,78)) // now num1 is [400,5000,78]
// how to pass object in function

 user ={
    username:"aditi tripathi",
    price:377
 }
function handleObject(anyObject){  // we are using anyObject it is generic name it can accomadate any object
    console.log(` the username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
handleObject({
    username:"hitesh",
    price:377
})


// to pass array in a function

function returnValue(getArray){
    return getArray[3]
}
console.log(returnValue([23,4,566,7,89,90,34]))