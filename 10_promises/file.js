 // promise => is a object two things happen in a promise 1. consumption
 //                                                       2. creation 
 // promise means eventual completion of task

 //creation of promise
 const promise = new Promise(function(resolve,reject){ //promise take a call back function
   setTimeout(function(){
    console.log('hey task async')
    resolve(); // return value to consume
   },2000)
 })

 // promise consume
 promise.then(function(){
    console.log("promise consumed")
 })


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
        },3000)
    })

})
 promiseOne.then(function(user){
    console.log(user)

 })

 