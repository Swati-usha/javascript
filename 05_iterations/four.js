// for in loop


const myObject ={
    'game1':'NFS',
    'game2':'Spiderman'
}


for(const i in myObject){
    console.log(`${i}, ${myObject[i]}`)
}

//  for of loop picks value but for in loop picks keys in array

//  ForEach requires callback function, it means it will not have a name.

const coding = ["js","ruby","java","python"]

coding.forEach(function (item){
    console.log(item)
})

// we can pass another function as well as a parameter to the forEach function.

function printme(item){
    console.log(item)
}

//  passing function as args
coding.forEach(printme)

// forEach brings item,index,array
coding.forEach((item, index, arr)=>{console.log(item,index,arr)})

const myproglanguage = [{
    languageName : "javascript",
    languageFileName : "js"
},
{
    languageName : "java",
    languageFileName : "java"
},{
    languageName : "python",
    languageFileName : "py"
}
]

myproglanguage.forEach((item)=>{console.log(item.languageFileName,item.languageName)})
