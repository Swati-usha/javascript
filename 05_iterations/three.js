// for of (array specific loop)

["","",""]
[{},{},{}]// objects inside array.

const arr = [1,2,3,4,5]

for(const index  of arr){
    console.log(`value is ${index} `)
}

const greetings ="Hello World"
for(const greet of greetings){
    if(greet ==" ")
        continue;
    console.log(`Each character is ${greet}`)
}

// map, It only stores unique combination of values(key and value )

const map1 = new Map()
map1.set('1',"India");
map1.set('2',"Japan");
map1.set('3',"Korea");
console.log(map1)
map1.set('1',"India")
console.log(map1)

// it will print the whole map object as one, to retrieve values separately for key and value , we must use[key,value]
for ( const index of map1){
    console.log(index)
}

for (const [key,value] of map1){
    console.log(`keys is ${key},Value is ${value}` )
}


