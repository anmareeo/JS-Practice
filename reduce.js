let arySource = ['one', 'one', 'two', 'three', 'four', 'four']


function reducer(result, value){

    if (result.hasOwnProperty(value))  {
        result[value]++ 
      
    }  else {

        result[value] = 1

    }
    return result
}

let result = arySource.reduce(reducer,{})
console.log(result)



let arySource = ['one', 'one', 'two', 'three', 'four', 'four']


let result = arySource.reduce((result, value)=>{

    if (result.hasOwnProperty(value)) {
        result [value] ++ 
      
    }  else {

        result[value] = 1

    }
    return result
}

let result = arySource.reduce(reducer,{})
console.log(result)