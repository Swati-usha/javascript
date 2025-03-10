const user = {
    username:'Swati',
    price :1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sumit"
// user.welcomeMessage()
// console.log(this);

function chai(){
    console.log(this);
}

// chai();

//  declaring function as a variable.

const chai2 = function(){
    let username = "Swati"
    console.log(this.username);
}

//chai2()

// declaring Arrow function.

const chai3 = () => {
    let username = "Swati"
    console.log(username)
}
chai3()
// explicit return
// const addTwo = (num1,num2) =>{
//     return (num1+num2);
// }

//implicit return
const addTwo = (num1,num2) =>(num1 + num2);

// If curly braces are used then we must write return
// Here object is being returned

const returnName = ()=>({username: "swati"})

//console.log(addTwo(5,6))

returnName();


// Always end an IIFE with a semicolon, otherwise it will not be executed.
// IIFE(Immediately Invoked function Expressions)
// This is a unnamed IIFE function declared as an arrow function
((name) => {
    console.log(`DB CONNECTED FOR ${name}`);
})('Swati');

// NAMED IIFE
// (function definition)(execution);
(function chai(){
    console.log('DB CONNECTED');
})();
