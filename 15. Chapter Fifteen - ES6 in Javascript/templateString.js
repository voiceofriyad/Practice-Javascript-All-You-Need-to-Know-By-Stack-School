// var s = `fjjks

//         fjkfdgjdg
//     sgsgss
//                 fdgfdgdgdgd`

// console.log (s.trim())

var age = 13
var name = 'Riyad'

console.log ('My name is ' + name + ' and I am ' + age + ' years old.')

console.log (`My name is ${name} and I am ${age} years old. 
I am ${age < 18 ? 'not ' : ''}adult.`)

console.log (name.includes ('a'))
console.log (name.padStart (15))
console.log (name.padStart (15, 'a'))
console.log (name.padEnd (15, 'd'))

console.log ('S'.repeat (15))