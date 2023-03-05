// let n = 10

// if (n > 5) {
//     throw new Error ('N is Greater than 5')
// }

console.log (Number.MAX_SAFE_INTEGER)

let m = 90071992547409923n
if (m > Number.MAX_SAFE_INTEGER) {
    throw new RangeError ('The Number is Too Long')
}

// console.log (a)