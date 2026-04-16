//object based getter setter

const user = {
   _email:"adititripathi121@gmail.com",
   _password:"adc12",


   get email(){
    return this._email.toUpperCase()

   },
   set email(value){
     this._email= value
   }

}
const tea = Object.create(user)
console.log(tea.email)