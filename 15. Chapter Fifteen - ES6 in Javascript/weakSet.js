let obj = {a : 10}, obj2 = {b : 20}
let set = new Set ([obj, obj2])

// obj = null
console.log (set)

let arr = [...set]
console.log (arr)
console.log (arr [0])


let weak = new WeakSet ([obj, obj2])
console.log (weak)

obj = null
console.log (weak)

console.log (weak.has (obj))
console.log (weak.has (obj2))
