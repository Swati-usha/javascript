//array

const myArr = [0,1,2,3,4,5]

const myLang = ['Html','css','javascript','Python']

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0])

//Array methods

myArr.push(89);
console.log(myArr);
myArr.pop()
console.log(myArr)

//shift and unshift
console.log(myArr.unshift(100));
console.log(myArr.shift());

console.log(myArr.includes(99));
console.log(myArr.indexOf(4));

// join method
const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);



// slice and splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B",myArr);
const myn2 = myArr.splice(1,4);
console.log(myn2);
console.log(myArr);
