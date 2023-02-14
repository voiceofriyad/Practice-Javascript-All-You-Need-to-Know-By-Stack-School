// function sqr (n = 4) {
//     // if (!n) {
//     //     n = 5
//     // }

//     // n = n || 6

//     return n * n
// }

// console.log (sqr ())
// console.log (sqr (9))


// function greet (name, msg) {
//     console.log (`${msg}! ${name}`)
// }

// greet ('Riyad', 'Hello')
// greet (null, 'Hello')
// greet (undefined, 'Hello')
// greet ('', 'Hello')


function greet2 (name = 'Faysal', msg = 'Hi') {
    console.log (name.length)
    console.log (`${msg}! ${name}`)
}

greet2 ('Riyad', 'Hello')
greet2 ('', 'Hello')
greet2 (null, 'Hello')
greet2 (undefined, 'Hello')



