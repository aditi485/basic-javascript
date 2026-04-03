const useremail = "aditi@gmail.com"
if(useremail){
    console.log("got user email")

}
else{
    console.log("donot have user email")
}
// falsy value
// false ,0 ,-0,"",null,undefined,bigInt 0n,NAN.
// truthy values
// "0","false", " ",[],{},function(){},


//++++++++++++++++++++Important+++++++++++++++++++++\\
 
const usersign = []
if(usersign.length === 0){
    console.log("empty array")
}

// for object
const obj = {}
if(Object.keys(obj).length===0){
    console.log("empty object")
}

// nullish coalesing operator

let val1 ;
val1 = null??12
valr = undefined ?? 14
val = 10 ?? 5
console.log(val1)
console.log(valr)
console.log(val)

// terneary operator
// syntax => condition?true:false 
let a =357
a >= 450? console.log ("wow"): console.log ("sorry")