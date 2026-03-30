 const tinderUser = new Object();
 tinderUser.id ="123abc"
 tinderUser.name = "aditi tripathi"
 tinderUser.isLoggedIn = false 
 console.log (tinderUser)// this singleton object declaration

 // nesting in the objects 
  const regularUser = {
    email: "adititripathi@gmail.com",
    fullName:{
        username:{
            firstName:"aditi",
            lastname:"tripathi"
        }
    }
  }
console.log(regularUser.fullName.username)
console.log(regularUser.fullName?.username)// this question marks symbol is used to check whether it is present or notif present then execute


    //+++++++++++how to concat objects +++++++++++++++++
const obj1 ={
    1:"a" , 2:"b",3:"c"
}
const obj2 ={
    1:"a" , 2:"b",3:"c"
}
const obj3 = Object.assign({},obj1,obj2) // it is not necessary to add a {} but it is good practise as it is based on target and source

const Array = [
    {
        id:"12345adc",
        email:"adititripathi@gmail.com"
    },
    {
        id:"12345adc",
        email:"adititripathi@gmail.com"
    },
    {
        id:"12345adc",
        email:"adititripathi@gmail.com"
    },
    {
        id:"12345adc",
        email:"adititripathi@gmail.com"
    },
    {
        id:"12345adc",
        email:"adititripathi@gmail.com"
    }
]
// we can access it like this 
console.log(Array[1].email)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

// if we want to check is this key is present in the object
console.log(Object.hasOwnProperty("isLoggedIn"))