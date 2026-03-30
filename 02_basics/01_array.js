const myArr = [0,1,2,3,4,"hitesh"] // array stores multiple object in a single variable
console.log(myArr[1])
console.log(myArr.length)

// we can declare it also
const myArr1 = new Array(1,2,3,4,5,6)
console.log(myArr1[0]);

//Array methods 

myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(0)// adding value in starting and shifting the values
console.log(myArr);
myArr.shift()// removes the unshift value
console.log(myArr)
console.log(myArr.includes(6))
console.log(myArr.indexOf(9))// if the value doesnot exists return the result -1
const newArr = myArr.join()
console.log(myArr)
console.log(newArr)


//slice ,splice => 
console.log(myArr)
console.log(myArr.slice(1,3))
console.log("b", myArr) // here after slicing original array does not change and does not include last index value 
console.log(myArr.splice(1,3))
console.log("c",myArr) //here original array changes and includes last index value
