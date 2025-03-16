const myNumbers = [1,2,3,4,5]
// MAP and filter CHAINING
const newNums = myNumbers
                .map((num)=>(num + 10))
                .map((num)=>(num * 10))
                .filter((num)=>num>140)
 console.log(`newNums ${newNums}`)

const newNums1 = myNumbers.forEach( function(num){console.log(num + 20)})

console.log(newNums1)


