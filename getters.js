//Getters and Setters
//Javascript does not have encapsulation. Certain properties in a class can be hidden in other languages, but javascript does not have that. So javascript uses getters and setters instead of encapsulation and private variables. Get and set are methods on our class. Defined outside the constructor, but inside the class. The underscore is an agreement for those looking at our code to make changes at the getter.



class Papers {
    constructor(){
        this._type = null
    }

    get type () {
        return this._type
    }

    set type (newValue) {
        this._type = newValue
    }
}

let paper = new Papers()
paper.type = "toilet"
console.log(paper.type)

// ====================================================
// Another Example of getters and setters
class Cars {
    constructor() {
        this._type = null
        // this._model = null
        // this._color = null
    }
    get type() {
        return this._type
        // return this._model
        // return this._color
    }

    set type(newValue) {
        this._type = newValue
    } 
}

let make = new Cars()
make.type = "Toyota"
console.log(make.type)