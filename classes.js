class MyClass {
//constructor adds elements to the empty object that is created by the new keyword
    constructor(param) {
        this.name = param.name
        this.sign = parm.sign
    }
//this method is created on the prototype chain and are outside of the constructor
    sayName() {
        console.log(this.name)
    }
}

//the new keyword makes an empty object
//the MyClass fills that object with properties.
let someObj = new MyClass ({name: "myName", sign: "Stop"})

console.log(someObj)
someObj.sayName()

// this is false because the method sayName is created on the prototype Chain, not in the Object.
console.log(someObj.hasOwnProperty('sayName'))

// this returns true because the method is created on the prototype chain
// console.log(someObj.getPrototype Of(someObj).hasOwnProperty("sayName"))

//all objects created by the same class will share the same object on the prototype chain. This allows us to have 100 objects with methods but not have 100 copies of the prototype.