//reduce is a swiss army knife of array transformers. It can be used to transform any array into anything else. It can do this because each time the callback function is called, it receives the element of the array, the index of the array, the entire array and (here is the magic) the result of the function from the time before. This result is referred to as the accumulator. An accumulator is a place to accumulate info.

// we are going to use reduce to create an object from and array
let myBiggerArray = ['property1', 'property2', 'property3', 'property4']

let myObject = myBiggerArray.reduce((accum, element, index, array)=> {

// this function is called or executed once fore every element in the array. The accum variable is the value of what the previous call to this function returned. The first time this function is executed, the value of the accum is what was set as the second parameter of the reduce function. In our case an empty object{}

// add string to object as key and value

accum[element] = element

return accum


}, {})

console.log(myObject)