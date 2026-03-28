let score = "33";
let value = Number(score)
console.log(value)
console.log(typeof value)//number
// if we want to convert string ,boolean ,null,undefined into a number write => Number
let score1 = null;
let value1 = Number(score1)
console.log(value1)//here its value will bs 0
console.log(typeof value1) // number
let score2 = undefined;
let value2 = Number(score2)
console.log(value2)//here its value will bs NaN
console.log(typeof value2) 
// in case of boolean we get 0 or 1


//CONVERSION FRON STRING 
let scoer = 33
let cont = String(scoer)
console.log(cont)
console.log(typeof cont)