//array specific loops
// for of loop 
const array = [1,2,3,4,5,6,7]
for (const i of array){
    console.log(` ${i}`)
}
// not only for array we can also do for string
const greeting = "hello world"
for(const greet of greeting){
    console.log(greet)
}
// maps => order in which u insert is maintained , and always unique
const map = new Map()
map.set( 'IN' ,'india')
map.set("fr","france")
map.set("USA","united State of america")
map.set( 'IN' ,'india')
console.log(map)

for(const [key] of map){
    console.log(key)
}

// objects are not itterable with this techniques
// const myobjects = {
//     an1 : "kalyani",
//     an2 :"itisha"
// }
// for(const [key] of myobjects){  // here it will give an error
//     console.log(key)
// }

