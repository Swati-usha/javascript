
let a = 10;
const b = 20;
var c = 30;

console.log(`value of a is ${a}`);
console.log(`value of b is ${b}`)
console.log(`value of c is ${c}`)

// checking for scope of variable declared as VAR. var doesnt follow the block scope. 
// henceit is not used for coding as it produced ambiquity.

if(true){
    let a = 20;
    const b = 40;
    var c = 80;
    console.log(`The value of a inside if block is ${a}, b is ${b} and c is ${c}`)
}

console.log(`The value of a outside if-scope is ${a}, b is ${b} and c is ${c}`)
// "Hence we can see that the value of variable c is not working according to the scope of variables."
// the value inside scope shouldnt be propogate outside scope,unlike in var.

const array =[1,2,3,4,5]
for (let i = 0; i<array.length;i++){
    const element = array[i];
}

function one(){
    const username = "Swati"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()

// ++++++++++++++++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++

// Here the function is called before its declaration, it is termed as hoisting in javascript. 
// we cannot do the same with the variables, they must be declared prior their calling.
console.log(addone(5));
function addone(num){
    return num +1;
}


// here it will give error as it is declared as a variable here. EXECUTION CONTEXT PLAYS A VITAL ROLE HERE.
console.log(result(6));
const result = function(num1){
    return num1 +2;
}

