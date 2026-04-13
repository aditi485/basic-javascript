const myname = "aditi    "
console.log(myname.length)
//  is there any method or property through which we we can get true length
console.log(myname.trim().length)// we dont want to do this every time 
console.log(myname.truelength )// this will show u that the function is not defined


const myheros = ["thorn","spiderman"]

const myobj = {
   username:"aditi",
   course:"btech",
   getuserdetail: function(){
      console.log(`the name of candidate is ${this.username}`)
   }

}

Object.prototype.hitesh = function (){
   console.log("hitesh is available everywhere")
}// now we have made the property in object now it access by function array object

myobj.hitesh()
myheros.hitesh()// in array it is also accessible 

// if we give power to object it is accessible by array,function ,object but what if we make method in array => it will only accessible by array alone  

Array.prototype.heyhitesh = function(){
   console.log("hitesh is there")
}
myheros.heyhitesh()
//myobj.heyhitesh()   => here in object it will be not available



let anotherusername = "chaiAurCode     ";
String.prototype.truelength = function(){
   console.log(`the true length is ${this.trim().length}`)
}
anotherusername.truelength();
"hitesh.      ".truelength()











