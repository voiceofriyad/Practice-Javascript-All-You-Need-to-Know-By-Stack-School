let obj = {a : 10}, obj2 = {b : 20}

let weak = new WeakMap ([[obj, 45], [obj2, 65]])

console.log (weak)

console.log (weak.get (obj))

obj = null
console.log (weak)
console.log (weak.get (obj))

console.log (weak.has (obj))
console.log (weak.has (obj2))






