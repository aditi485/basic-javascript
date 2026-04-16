// if for any property we define getter its necessary to have setter also
// koi bhi value class ke andar se get krna chahte ho toh get hota hai aur koi bhi value set krna chahte ho toh set hona chaiye
// agar set nhi hai toh koi bhi value hm log set nhi kr skte 

//mordern way
class user{
    constructor(username,email,password){
        this.username = username;
        this.email=email;
        this.password = password
    }
        get password(){    // return the value always remember that method name should be as same as property name
            return this._password.toUpperCase()//get always has return
        }
        set password(value){  // store the value as it is 
             this._password = value;// does not use return
        }


    
}
const tea = new user("aditi","aditi@gmail.com","abczfh123")
console.log(tea.password)