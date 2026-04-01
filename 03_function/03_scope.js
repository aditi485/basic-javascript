// there are two type of scope 
//=>global scope 
// => local scope 

if(true){
   var c = 4 
}
//console.log(a)// here it will give not defined because its blockl scope is inside a function
//console.log(b) // here it will give not defined because its blockl scope is inside a function
console.log(c) //. it will give value becoz it has global scope

function the(){
    username="aditi tripathi"
    function add(){
        console.log(username)
    }
    //console.log(website)
add()
}
the()
console.log(one(4,5))
function one(a,b){
     return a+b;
}

console.log(two(9,80)) //this will give an error 
const two = function(c,d){
         return c+d;
} 




