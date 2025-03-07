function welcome(name){
    //console.log(`welcome ${name}`)
    return `${name} Just logged in`
}
//
console.log(welcome("swati"));

function addTwoNumbers(num1,num2){
    
          return num1+num2;
}

let result = addTwoNumbers(4,5);
console.log("Result: " + result);


function loginUserMessage(username= "swati"){
    return `${username} just logged in.`
}

//console.log(loginUserMessage("Mohit"));

console.log(loginUserMessage());


// Passing multiple values in functions using REST(... variable)

function calCartPrice(...products){
    return `products are priced at ${products}`;
}

console.log(calCartPrice(100,200));

// sending values as a combination of values and rest parameters.
// only starting two values are getting stored in val1 and val2 others in rest.

function calculateCartPrice2(val1,val2, ...num1){
    return num1;
}

console.log(calculateCartPrice2(200,400,500,600,700,800,900));

//object

const user = {
    username : "Swati",
    price : "599"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)

// we can directly send an object into the function.
handleObject({username : "Swati",
    price : "599"})

    // we can send an array as parameters in the function

    const myNewArray =[200,400,600];

    function returnSecondValue(getArray){
        return getArray[1]
    }

    //console.log(returnSecondValue(myNewArray));

    // we can send the array as parameter also.

    console.log(returnSecondValue([200,400,600]));

    // a function to implement user loggin in.

    function loginUserMessage(name){
        if(!name){
            console.log("Please Enter a username");
            return
        }
        return `User ${name} Logged In.`

    }


console.log(loginUserMessage("Swati"));
