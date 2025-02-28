// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log(null > 0); // false, since null is getting converted to number which is 0.
console.log(null == 0);// for this it is not converting it, but just equating it.
console.log(null >=0);// here it is converting it and since null converted in number is zero, so it is showing true.
/* reason for above statements is that an equality check == and comaprisons <><=>= work differently. c
Comparisons convert null to a number, treating it as 0. That's why(3) null >=0 is true and(1) ull >0 is false.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);



// === strict check , it will check datatype as well as values.