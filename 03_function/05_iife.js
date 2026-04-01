// Immediately Envoked Function Expression (IIFE) => koi bhio function likha usko turant execute krana hai  
//use => global scope ke pollution se prblm hoti hai kai baar uske pollution ko htane ke liye hmne iife ka use kiya 
(function chai(){
    console.log("DB connected ");
})(); 
// this arrow function is required to put oterwise it will not terminate and another IIFE  function WILL give error

((name ) => {
    console.log(`DB two connected ${name}`)
})("hitesh")