// for each loop do not return any value 
// const arr = [1,2,3,45,5,7]
//  const value =arr.forEach((item) => {
//     console.log(item)
// })
// console.log(value) // this will return undefined
// const arr1 = [1,2,3,45,5,7]
//  const value1 =arr.forEach((item) => {
//     return item;  // now at both places it will give undefined
// })
// console.log(value1)

// thats why we use filter
let arr = [1,2,3,4,5,6,7]
 const val = arr.filter((item) => item >3)
 console.log(val) // now this will return the value

let array = [1,2,3,4,5,6,7,8,9]
 let val1 = array.filter((item) =>{
    if(item%2==0){
     return item
    }
})
console.log(val1)


let books =[{
    publish : 2006,
    type:"fictional",
    edition:2027
},{
 publish : 2001,
 type :"fictional",
    edition:2026
},{
 publish : 1992,
 type :"non fictional",
    edition:2018
}]

const value = books.filter((book) => book.edition > 2019) 
console.log(value)

/////++++++++++++++MAP+++++++++++++++++++++

const Array = [1,2,3,4,5,67,8]
 const value1 = Array.map( (item ) => item+7)
 console.log(value1)

 // we can. alsop do nesting in this
 const value2 = Array.map((item)=>item*10).map((item)=>item+1).filter((item)=>item>67)
 console.log(value2)



//+++++++++++++++ reduce. ++++++++++++++++++++
 const myArr = [56,67,78,89,90]
//  const valu = myArr.reduce((acc,currVal) => acc + currVal,0 )
 
// console.log(valu)

const valu = myArr.reduce(function(acc,currVal){
    console.log(`the acc is ${acc} and currVal is ${currVal}`)
    return acc +currVal
},0)
console.log(valu)
