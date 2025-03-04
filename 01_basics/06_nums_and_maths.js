const score = 400
console.log(score);

const balance = new Number(10);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2))

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));


const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(3.56));
console.log(Math.ceil(4.32));
console.log(Math.floor(1.345));

console.log(Math.max(2,4,7));
console.log(Math.min(1,3,8));

//Important code for mathematical logics in javascript 
// math.random gives values between 0 and 1.
console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));

const min = 10;
const max =20;
// important line
console.log(Math.floor((Math.random()*(max-min +1)))+min)