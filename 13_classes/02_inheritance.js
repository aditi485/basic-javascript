class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`the user is ${this.username}`)
    }
 }

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password = password;

    }
    teacherEnrolled(){
        console.log(`the teacher ${this.username} has been get enrolled`)
    }
}
const chai = new teacher ("chai", "aditi@gmail.com", "123abc")

chai.teacherEnrolled()
chai.logMe()

const tea = new user("aditi tripathi")
console.log(chai === tea)
console.log(chai instanceof teacher) // kya voh chai usi se hi bna hai
console.log(chai instanceof user)