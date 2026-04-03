// FOR OF loop
const myObject ={
    "js":"javascript",
    "cpp":"c++",
    "py":"python"
}
for(const key in myObject){
    console.log(`${key} is shortcut for ${myObject[key]} `)

}

// this loop will not iterable on map 

const array =[ "a","b","c","d"]
for (const values in array){
    console.log(array[values])
}
