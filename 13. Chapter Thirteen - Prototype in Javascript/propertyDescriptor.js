var person = {
    name : 'Riyad'
}

//console.log (person)

// for (var i in person) {
//     console.log (i)
// }

// console.log (Object.keys (person))

// var descriptor = Object.getOwnPropertyDescriptor (person, 'name')
// console.log (descriptor)


// let baseObj = Object.getPrototypeOf (person)
// let descriptor = Object.getOwnPropertyDescriptor (baseObj, 'toString') 
// console.log (descriptor)

Object.defineProperty (person, 'name', {
    enumerable : false,
    writable : true,
    configurable : false,
    value : 'parvez'
})







