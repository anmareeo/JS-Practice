//destructuring
// arrrays are data structures
// objects are data structures
// destructuring is the practice of extracting data elements out of data structuring

// destructuring arrays.a
let myBigFatHairyArray = ["one", 'two', 'three', 'four', 'fifth']
//destrictir

let [first, second, third, fourth, fifth] = myBigFatHairyArray

console.log(fourth)


let[firstLet, secondLet, thirdLet] = "let"

console.log(secondLet)
// ojects are data structures as well
// we destructure objects with object syntax
// objects are destructured by matching the property name
// the property name is the "key" of the key-value pair
let properties = {
    propNameA: "Some value",
    propNameB: 42,
    propNameC: {objectExample: "some object"}
}
let {propNameA, propNameB, propNameC} = properties

//the property names need to match EXACTLY for the destructuring to work.

console.log(propNameC)
