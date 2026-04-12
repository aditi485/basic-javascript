const obj = {
    username:"kalyani tripathi",
    logincount:8,
    signedIn:true,
    getuserdetail : function(){
        console.log(`username : ${this.username}`)// jab bhr se saman lene hota hai toh hum log this keyword use karte hai
       console.log(this)

    }
    
}
console.log(obj.username)
console.log(obj.getuserdetail())
console.log(this)// now declaraing this in the global context 
// In browser when we run this we get a window object and here we get empty object