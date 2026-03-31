// destructuring of object
  
const course = {
    coursename : "btech",
    coursefees:120000,
    college :"akgec "
}
// now if we have to acess we have to do 
console.log(course.college)
// but there is another way to acess it which is called destructuring
const {coursename:name1} = course
//kon si value extract krni hai : rename by short name = kha se extract krni hai
console.log(name1)

//what is APIcalls => api is used to fetch the data coming from backened 
// {
//     "name":"aditi",
//     "course" :"btech",
//     "class":8
// }
[
    {},
    {},
    {}
]
