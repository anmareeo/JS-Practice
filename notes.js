// examples of a factory function
function makeDiaper(size, brand, type){

return {
    size: size,
    brand: brand,
    type: type,
}
}
let myDiaper = makeDiaper(4, "Brandless", "cloth")
console.log(myDiaper)
// showed {size: 4, brand: "Brandless", type: "cloth"}

/*shorthand for the above if the variable and properties are the same.
return {    
    size,
    brand,
    type,
}
*/

let someObj = {
    name: 'myName',
    sayName: function (){
        console.log(this.name)
    }
}

    someObj.sayName()
    consol.log(someObj)


    class Diaper {
        constructor() {
            this.age = 29
            this.name - "myName"
        }
    }
let newDiaper = new Diaper()
console.log(newDiaper)
// in Classes, the new keyword makes a new empty object. There is nothing in it. It creates a constructor.  

class Clothes {
    constructor() {
        this.weight = "6pound"
    }
}

// Arrow functions
// regular functions==> function name(){     }
// ( ) => {   } the arrow is often referred to as a fat arrow.
// regular functions - js will tell it to run in scope, making the "this" more easily identifiable.
// ==================================================================
//Getters and Setters
//Javascript does not have encapsulation. Certain properties in a class can be hidden in other languages, but javascript does not have that. So javascript uses getters and setters instead of encapsulation and private variables. Get and set are methods on our class. Defined outside the constructor, but inside the class.

// Class Beer {
//     constructor (inObj){
//         this.name = inObj.name
//         this.price = inObj.price
//     }
// }


// get price (){return this.price}
// set price (param){this.price = params} //Set always has to take in a parameter, but ONLY one. 

let myObject = {
    name: "this is a name"
}

myObject["word"] = []
console.log(myObj[name])

// passing in a function the a function we are calling is going to call

