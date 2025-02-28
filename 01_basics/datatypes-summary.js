//  primitive
// 7 types : String , Number, Boolean, null, undefined, Symbol(to make a component unique), 
// BigInt.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail= undefined;// if a variable is not declared it will be declared as undefined.

const id = Symbol('123'); // It simply assigns a unique value to the same string too.
const anotherId = Symbol('123');

console.log(id == anotherId);

const bigNumber = 345426563n// as we added n to the end of the number it behaves as a biginteger.

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"Swati",
    age:37,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(myFunction));
console.log(typeof(bigNumber));
console.log(typeof(heros))

//important web events and js objects

// javaScript is dynamically typed.


// Refernce Type (NoN Primitive)
// Array, Objects,Functions.

