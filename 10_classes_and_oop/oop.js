const user12 = {
    username: "Swati",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(this)
    }
}

console.log(user12.username);
console.log(user12.getUserDetails())

const user1 = user12;


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this

}

const user11 = new User("Swaati",'20',false);
console.log(user11)
const user2 = new User("Ruchi",'1800',true) 
console.log(user2)


// To check whether an object is an instance of the class.


console.log(user11 instanceof User)
