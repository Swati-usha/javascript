// array can store data in any format....... can store array as a value too

const marvel_heros =['Thor','IronMan','SpiderMan']
const dc_heroes = ['superman','flash','batman']

//marvel_heros.push(dc_heroes);

console.log(marvel_heros);

const concat_array = marvel_heros.concat(dc_heroes);
//dc_heroes.concat(marvel_heros);
console.log(concat_array);

const all_new_heros = [...marvel_heros, ...dc_heroes]
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Swati"));
console.log(Array.from({name:"Swati"})) // it will not convert it and hence will return empty array.

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));