let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024,6,2);
let myCreatedDate = new Date("2024-07-02")

console.log(myCreatedDate.toLocaleDateString());
let myTimestamp = Date.now();
console.log(typeof myTimestamp);
console.log(myTimestamp);
console.log(myCreatedDate.getTime())
// To Calculate the time in seconds...imp interview 
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDay());
console.log((newDate.getDay()) +2)
//[ press ctrl plus space]
console.log(newDate.toLocaleString('default',{
    weekday :'long'
}))