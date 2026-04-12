 // promise => is a object two things happen in a promise 1. consumption
 //                                                       2. creation 
 // promise means eventual completion of task

 //creation of promise
 const promise = new Promise(function(resolve,reject){ //promise take a call back function
   setTimeout(function(){
    console.log('hey task async')
    resolve(); // return value to consume
   },1000)
 })

 //promise consume
 promise.then(function(){
    console.log("promise consumed") })


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hey you learned")
        resolve()
    },1000)
}).then(function(){
    console.log("promise consume")
})
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'adititripathi',study:'btech',   // resolve returns the value in then function
            college:'ghaziabad'
        },1000)
    })

})
 promiseOne.then(function(user){// resolve and then are connected so by default there will data. come in this
    console.log(user)

 })


 const promisefour = new Promise(function(reject,resolve){
    setTimeout(function(){
       let error = false
       if(!error){
          resolve({ 
            username: "aditi tripathi",
            course: "btech",
            semester: 4})
       }
       else{
           reject("ERROR Something went wrong")
       }
    },1000)
 })

 promisefour.then((user)=>{
    console.log(user);
    return user.username
  }).then((username) =>{
    console.log(username)
 })
 .catch( function(error){ // reject and catch are directly connected with each other
    console.log(error)
 }).finally(()=>{
    console.log("the promise finally executed ")
 })

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
       if(!error){
        resolve({id:"abc123", company:"infosys"})
       }
       else{
        reject("NEW ERORR!!!")
       }
    },1000)
}) 
async function consumePromise() {
    try{
        const response = await promisefive;
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromise()

async function fetching(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(erorr)
    }
}
fetching()
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=> console.log(data))
.catch((error)=> console.log(error))
 