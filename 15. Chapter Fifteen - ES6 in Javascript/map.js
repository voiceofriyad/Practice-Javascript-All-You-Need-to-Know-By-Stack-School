let map = new Map ([
    ['a', 10],
    ['b', 20],
    ['c', 30]
])

map.set ('d', 40)
map.set ('5', 'Riyad')
map.set ({name : 'Riyad'}, 45)
map.set ('50', {name : 'Riyad'})

console.log (map)

map.delete ('c')
console.log (map)
console.log (map.size)

// map.clear ()
// console.log (map)


console.log (map.get ('5'))

console.log (map.keys ())
console.log (map.values ())
console.log (map.entries ())


for (let i of map) {
    console.log (i)
}


for (let [k, v] of map) {
    console.log (k, v)
}
for (let [k, v] of map) {
    console.log (v, k)
}


map.forEach ((v, k) => {
    console.log (v, k)
})
