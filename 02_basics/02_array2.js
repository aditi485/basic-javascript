const fruits =["apple","banana","mango","grapes"]
const vegetable = ["bootleguard","potato","onion","litchi"]
//fruits.push(vegetable)
//console.log(fruits)// here the push function insert vegetable as single array
 const newfruits = fruits.concat(vegetable)
//console.log(newfruits)// here it add not as an array 
const all = [ ...fruits,...vegetable]
//console.log(all)

const realArr = [1,3,5,6,7,[2,3,4],5,[34,[5,6]]]
const another = realArr.flat(Infinity)
console.log(another)

// if we want to check data sytored is array or not 

console.log(Array.isArray("hitesh"))
console.log(Array.from("hittesh"))
console.log(Array.from({name:"aditi"}))// it will return a empty  array becoz we have not pass the value we want to convert key or value to array

let score1 = 200
let score2 =300
let score3 = 400
console.log(Array.of(score1,score2,score3))

