function SetUsername(username){
    this.username = username
    console.log("called")
}


// here in setusername function we need to explicitly call method "call" and pass "this" as a reference so that 
// it can be accessed even after the execution context of the function(setusername) is removed from the callstack.
function createUser(username, email, password){
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createUser("Swaati","tyagiswaati@gmail.com","hello")
console.log(chai)