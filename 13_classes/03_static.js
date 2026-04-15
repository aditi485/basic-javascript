 class user {
    constructor(username){
        this.username = username

    }
    logMe(){
        console.log(`the user is ${loggedin}`);
    }
    static createID(){// sometimes we donot want to give access to the all object 
        console.log(`password : 1234@ad`)
    }
 }
  
 const chai = new user("aditi") 
 chai.createID()
//even the class which extend user it will also not access