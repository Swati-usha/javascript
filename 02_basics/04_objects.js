const userOne = new Object();
userOne.name = "Radha";
userOne.nationality = "indian"
userOne.isLoggedIn = false

//console.log(userOne);

const regularUser = {
    email:"abc@hotmail.com",
    fullname:{
        firstname:"User",
        lastName: "Tyagi"
    }
}

console.log(regularUser.fullname.firstname)

// optional chaining using ?.
//combining objects using assign keyword

const arr1 ={1:"a", 2:"b"};
const arr2 = {3:"c", 4:"d"};

const arr3 = Object.assign({},arr1,arr2)

console.log(arr3);

//this is the method for spread opeartion. 
const arr4 = {...arr1, ...arr2}
console.log(arr4);


console.log(regularUser.email);

console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));

// using isloggedin, we can check if an object has certain property.

console.log(regularUser.hasOwnProperty('isLoggedIn'));
