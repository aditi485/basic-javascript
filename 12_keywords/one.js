// CALL , BIND ,THIS 
//CALL current execution context kisi aur function ko pass kr deta hai
 function seperate(username){
    this.username = username;
}
function newlycreated(username,email,phone_no){
    seperate.call(this, username)// use of this is here that i will use your corrent context 
    
    this.email=email;
    this.phone_no=phone_no

}
const chai = new newlycreated("aditi tripathi","aditi@gmail.com",9838660080)
console.log(chai)