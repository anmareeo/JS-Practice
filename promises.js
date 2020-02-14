/*Objects have properties and methods. It knows stuff.
Let ary = new Array ()
Let obj = new Object ()
let prom = new Promise() A promise knows stuff and it does stuff. The system recognizes it for what it is.

When we create a promise, it is either pending resolved or rejected.
Promise { then(), catch(), finally()}
If it is in pending state, it does not know what its value is. It has not been set. If it is in resolved state, we received the value okay. If it is in the rejected state, it means that we have received the value, but the value has been rejected.
Promises resolve issues with callbacks..*/

let myString = "    This is a CAPS string ALL CAPS      "

let myLowerString=myString.toLowerCase()
let myTrimString =myLowerString.trim()
let myFinal = myString.toLowerCase().trim();
console.log("*" + myFinal +"*")

// JavaScript is a single threaded language. Multi-threaded architechtures can do more than one thing at a time. It's like going into a restaurant, and everyone gets their own waiter, so there is no waiting for help. With JavaScript, there is one waiter, so people may have to wait.
// JS is asynchronous, but we don't want to have to wait for certain things to finish before doing another. Creating a promise sends a request to an API and then it gets the answer back and waits to be resolved.