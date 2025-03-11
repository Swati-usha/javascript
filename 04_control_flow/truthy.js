const userEmail ="h@swati.ai"

if(userEmail){
    console.log("Got user email")
}else{
    console.log("User doesn't has email")
}
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// "0", 'false', " ",[],{},function(){}

// how to check if an array is empty,length is checked for array.
//(===) check value as well as type.

const empty_array = []

if(empty_array.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");

}


// Nullish Coalescing Operator(??): null undefined
// to treat values as they are returned from databases, whether value is returned or null.
// if the returned value is null, so it safety checks it, so that it will not affect the code further

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
// value returned will be 10.

val1 = null ?? 10 ?? 20;
// It will return the first not null value.

// Terniary operator(?)
//condition ? true : false;

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("Price is greater than 80"): console.log("Price is less than 80");