// if
// {} it defines the scope.
if(true){
console.log("IF block executed")
}
if(false){
console.log("else block executed")
}

const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log("Welcome")
// }else{
//     console.log("please Log in")
// }


// Not a good practice for coding
const balance = 500000
if (balance >10000) console.log("greater than 10000"), console.log("greater value");

// Logical

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = true
const LoggedInFromEmail = true

if(userLoggedIn && debitCard && 2 == 3){
    console.log("Allow to buy course");
}

if( LoggedInFromGoogle|| LoggedInFromEmail ){
    console.log("User Logged In.")
}