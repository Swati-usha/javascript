let index = 0
while(index <10){
    console.log(`value of index is ${index}`)
    index = index + 1;
}

let myArray = ['flash','batman','superman']

let arr =0
while(arr< myArray.length){
    console.log(`value at ${arr} is ${myArray[arr]}`)
    arr = arr + 1
}

// do while loop
let score = 1;

do{
    console.log(`Before increment , value of score is: ${score}`)

    // score = score + 1;
    score++
    console.log(`After increment value of score is : ${score}`)
    

}while(score<10);