let set = new Set ([1, 2, 3])
// let set = new Set ()
set.add (5)
set.add ('Riyad')
set.add (1)
set.add (3)

console.log (set)
console.log (set.size)

// set.clear ()
set.delete (3)
console.log (set)

console.log (set.has (5))

console.log (set.keys ())
console.log (set.values ())


let keyIterate = set.keys ()
console.log (keyIterate.next ())
console.log (keyIterate.next ())
console.log (keyIterate.next ())
console.log (keyIterate.next ())
console.log (keyIterate.next ())


let valuesIterator = set.values ()
console.log (valuesIterator.next ())
console.log (valuesIterator.next ())
console.log (valuesIterator.next ())
console.log (valuesIterator.next ())
console.log (valuesIterator.next ())



function isIterable (obj) {
    return typeof obj [Symbol.iterator] === 'function'
}

console.log (isIterable ({}))
console.log (isIterable ([]))
console.log (isIterable ('test'))
console.log (isIterable (new Number (45)))
console.log (isIterable (new Map ()))
console.log (isIterable (new Set ()))

console.log (isIterable (set))


for (let i of set) {
    console.log (i)
}
