//we know that we have direct acccess of object
const tea = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(tea)// we cannot change the value of PI becocz it is hardcoded as well as if ew see the property its writable property is false


// can we make our object whose value cannot be changed 
let chai = {
    name:"ginger chai",
    price:250,
    isavailable:true

}
console.log(Object.getOwnPropertyDescriptor(chai,"price")) // chai => is object but in this we require a property name so by using comma we give property name.
 

// we can define our own property such that no one else can implement it 
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false  // THROUGH THE ENUMERABLE property we can stop the iteration
})
console.log(Object.getOwnPropertyDescriptor(chai,"name")) 

//for eg
Object.defineProperty(chai,"price",{
    enumerable:false
})
for(let [key,values] of Object.entries(chai)){
    console.log(`${key}:${value}`)
}