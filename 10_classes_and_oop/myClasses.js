// ES6 class

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }


//     changeusername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123456")

// console.log(chai)

// console.log(chai.encryptPassword())
// console.log(chai.changeusername())



// behind the scene, using prototype

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

User.prototype.changeusername = function(){
    return`${this.username.toUpperCase()}`
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea = new User("tea","tea@gmail.com","3456");

console.log(tea.encryptPassword())
console.log(tea.changeusername())