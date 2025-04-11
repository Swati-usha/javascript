let myName ="Swati     "
// console.log(myName.trueLength())


let myHeros = ['thor','spiderman']
let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log('Hitesh is present in all objects')
}
heroPower.hitesh()

myName.hitesh() 

// Inheritance

const User44 ={
    name:'Chai',
    emai:"google.com"
}

const Teacher ={
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport ={
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User44


//  modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherusername ="chaiaurcode      "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True Length is ${this.trim().length}`)
}

anotherusername.trueLength()