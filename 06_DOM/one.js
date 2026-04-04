// to access element to do 

document.getElementById("title") // now we have access to this 
// we can apply different function on it
document.getElementById("title").id
document.getElementById("title").title
document.getElementById("title").style.backgroundColor = "pink"; //
console.log(document.getElementById("title").getAttribute("id")) // gives you the id
console.log(document.getElementById("title").className)

 console.log(document.querySelector("#list"))
 // this will give access to first one only
 // if we want to select all we do 
   const share = document.querySelectorAll("li") 
// now it will return a nodelist
// nodelist is not an array => have some function of array but not completely if we want to use array function we need to convert it
 
share[1].style.backgroundColor = "red"
console.log(share)

 const htmlcollection = document.getElementsByClassName("list1")
 console.log(htmlcollection)
const myconverted = Array.from(htmlcollection)
 console .log(myconverted)
myconverted.forEach((li) => {
     li.style.color = "orange"
})
myconverted[1].style.color = "green";