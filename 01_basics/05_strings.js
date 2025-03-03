const name = "Swati"
const repoCount = 10;

//console.log(name + " " + repoCount); this is not a good one to use 

// instead use this
console.log(`Hello ${name} you have ${repoCount} repositories.`)

// another way to initialize string
const gameName = new String('Swati');

console.log(gameName);
console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(-5,2);
console.log(anotherString);

const newStringOne ="      Swati Tyagi   ";
console.log(newStringOne);
console.log(`trimmed value is ${newStringOne.trim()}`);

const url = "https://swati.com/swati%20tyagi"

console.log(url.replace('%20',"-"));
console.log(url.includes('swati'))

