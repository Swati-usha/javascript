 class User{
    
    constructor(username){
        this.username = username
    }

    static showDetails(){
        console.log(`${this.username} Inside static`)
    }

    logMe(){
        console.log(`${this.username} Logged In`)
    }
 }
 const user_1 = new User("Sandhya")
 user_1.logMe()
//  static properties acan be 
 User.showDetails()