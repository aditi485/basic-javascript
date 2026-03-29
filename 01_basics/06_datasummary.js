// data types are mainly two types  
// 1=>   Primitive 
// 2=>   NonPrimitive
// difference is of call by value and call by refrences
// means how they are stored in memory and how you can acess
// 1=>   Primitive  : 7 types => call by value :in this copy of data is provided instead of giving refrences
// string , 
// number ,
//  boolean , 
// null means empty not empty string or zero ,
// undefined => memory is declared space is declared but value nhi asssign hui hai,
// symbol: to make component unique
// bigint


// non Primitive are call by refrence => memory me inka refrence directly allocate kiya jata hai

// Arrays , objects , function

const id = Symbol('1234')
const idval = Symbol('1234')
console.log(id === idval)
//array
let heroes = ["superman","shaktiman","shresha"]
console.log(heroes);
// objects
let obj = {
    name:"aditiTripathi",
    education:"btech",
    currentStatus:"working"
};
console.log(obj);




