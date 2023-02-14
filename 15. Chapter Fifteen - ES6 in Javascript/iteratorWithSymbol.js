const arr = [1, 2, 3]

console.log (arr [Symbol.iterator])
console.log ('str' [Symbol.iterator])

let iterate = arr [Symbol.iterator] ()

console.log (iterate.next ())
console.log (iterate.next ())
console.log (iterate.next ())
console.log (iterate.next ())


let str = 'SARA'
let iterateTest = str [Symbol.iterator] ()

console.log (iterateTest.next ())
console.log (iterateTest.next ())
console.log (iterateTest.next ())
console.log (iterateTest.next ())
console.log (iterateTest.next ())