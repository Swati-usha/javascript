let score = undefined

// console.log(typeof(score))

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);//String
// console.log(valueInNumber);// NaN

//"33"=> 33
// "33abc"=> NaN
// true=> 1; flase=>0


// for null, it takes 0 as a value.
// for undefined it will show NaN
// for boolean value it will show 0 for false and 1 for true.

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);
//"" => false;
// 1=> true, 0 => false, "swati =>true"

let someNumber = 34;
let stringNumber = String(someNumber);

//console.log(stringNumber);
//console.log(typeof (stringNumber))
//browser gives String values.

// ***********************Operations************************************

let value = 4
let negValue = - value

console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3); modoulus


let str1 ="hello"
let str2 =" Swati"
str3 = str1 + str2;
console.log(str3);

// console.log("1" + 2); // output 12
// console.log(1 +"2"); // output 12
// console.log("1" + 2 + 2); // output 122
// console.log((1 + 4) +"2"+"2") //output 522

// console.log(true); // output true
// console.log(+true);// output 1 not a good practice, true + is not possible.
// console.log(+"");
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100;
gameCounter++;//postfix
++gameCounter;// prefix
console.log(gameCounter);

// read from ecma and js mdn.