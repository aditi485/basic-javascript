// inheritance

const user ={
    name:"aditi tripathi",
    email:"tripathiaditi@gmail.com"
}
const teacher = {
    makevideo:true,
}
const teachingsupport = {
      isavailable: true,
      workinghours:12+"hrs",
      __proto__:teacher    // this inherit all the element of teacher object
}
console.log(teachingsupport.makevideo)

// we can do like this also
teacher.__proto__ = user
console.log(teacher.name)

// mordern day syntax
Object.setPrototypeOf(teacher,user)
console.log(teacher.email)