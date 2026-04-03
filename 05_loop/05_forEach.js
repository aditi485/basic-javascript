// for Each
coding =[ "java","cpp","c++","python"]
coding.forEach( function(item){// as it is a callback function here no function name is given
    console.log(item)
});
// or we can use arrow function 
coding.forEach( (val) => {
    console.log(val)})

// if we want to pass a function
function printme(item){
    console.log(item)
}  
coding.forEach(printme) // here we wi9ll just pass function refrence no function calling is done printme()

const array =[
    {
        languagename : "python",
        languagefilename : "python.txt"
    },{
        languagename : "java",
        languagefilename : "java.txt"
    }, {
        languagename : "javascript",
        languagefilename : "javascript.txt"
    }
]
array.forEach((item) => {
    console.log(item.languagefilename)
})