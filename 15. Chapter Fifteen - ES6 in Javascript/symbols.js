let s1 = Symbol ('test')
let s2 = Symbol ('test')

console.log (s1)
console.log (s2)

console.log (s1 === s2)

let toss = {
    HEAD : Symbol ('HEAD'),
    TAIL : Symbol ('TAIL')
}

console.log (toss)
console.log (toss.HEAD)
console.log (toss['HEAD']) 