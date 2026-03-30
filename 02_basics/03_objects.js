// singleton // constructor se singleton bnta hai
// eg object.create()  
// literals se singleton nhi bnta 
//+++++++++++++++++++

const mysym = Symbol("mykeys")

const user ={
    id : 1234,
    "full name": "hitesh chaudhary",   // this can be access using square notation only 
    [mysym]:"mykeys12", // to declare symbol in object we need to do this
    age :17,
    email :"google.com",
    location :"jaipur",
    isLoggedIn : false,
    lastLoginDays :["monday","tuesday"]
}
// to access there are two methods
       console.log(user.email)
       console.log(user["email"])
       console.log( typeof user[mysym])

// if we want to change value 
user.email = "tripathiaditi121@gmail.com"
console.log(user)

// if u want that no one can change the value u can freeze it 
// Object.freeze(user) // now after that changes will not give error but it will not propogate changes

//if we want to give add function in an objects 
user.greeting = function(){
     console.log("hello js user");
}
console.log(user.greeting)// here function will not execute only refrence of a function is pass
console.log(user.greeting())
console.log(user)

user.greetingtwo = function(){
    console.log(`hello js user ${this.id}`)

}
console.log(user.greetingtwo())

