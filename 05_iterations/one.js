//for
let array = [1,2,3,4,5]
for(let index=0; index <array.length; index++)
{
    const element = array[index];
    console.log(element)
}

//  nested loop

for(let i =1; i<=10; i++){
    console.log(`Outer Loop value ${i}`);
     for(let j=1; j<=10; j++){
       // console.log(`Value of i is ${i} and j is ${j}`)
       console.log(` ${i} * ${j} = ${i*j}`)
     }
}

// break and continue

for(let i=1;i<=20;i++){
    if(i==5) 
        {
            console.log(`Detected 5`)
            break;
        }
    console.log(`value of i is ${i}`)
    
}

for(let i=1;i<=20;i++){
    if(i==5) 
        {
            console.log(`Detected 5`)
            continue;
        }
    console.log(`value of i is ${i}`)
    
}