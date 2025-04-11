// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Entered in Timeout Stage")
//         resolve()
//     },1000)

// }).then(function(){console.log("Promise Successfully Consumed")}).catch(function(e){console.log(`Error encountered is ${e}`)})

// // Sending data through resolve

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Swaati", email:"tyagiswaati@gmail.com"})
//     },1000)
// }).then(function(user){console.log(user)})

// Generating Error response through Reject.

// PromiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if (!error){
//             resolve({username:'Swaati',email:'tyagi.swaati@gmail.com'})
//         }else{
//             reject('Error:Something went wrong')
//         }
//     },1000)
// })

// PromiseFour
// .then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(`Error is ${error}`)
// }).finally(()=>{
//     console.log("Completely executed.")})

//  Consuming promises using asyn await
// async function consumePromiseFour(){
//     try{
//         const response = await PromiseFour
//         console.log(`Response from Promise Four is ${response}`)
//     } catch(error){
//         console.log(`Async_AwaitError is ${error}`)
//     }
// }

// consumePromiseFour()

// Using fetch

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data)

//     }catch(error){
//         console.log(`Error generated is ${error}`)
//     }
// }

// getAllUsers()

// Using fetch , .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{`Error is ${error}`})

