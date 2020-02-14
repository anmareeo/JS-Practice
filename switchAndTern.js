//constants make the code more readable and meaningful
const SUNDAY = 0
const MONDAY = 1


let value = 6
//this is the value to test
switch (value) {
    case 5: //if this value matches execution starts on the next line
        console.log(5)
    break //this breaks out of the switch. Otherwise code execution fall through to the next line

    case 6:
        console.log(6)
    break

    case "string":
        console.log("string")
    break

    default://when no other case matches. Optional but recommended
        console.log("default")

//end of switch
}

// ===========================================================
// Ternary

//(expression) ? (true) : (false)

let result = 5==6 ? '5 does =5': 'You are silly'

console.log(result)

