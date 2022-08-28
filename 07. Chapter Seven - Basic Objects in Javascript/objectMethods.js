var obj = {
    x: 100,
    y: 200,
    z: 300
}

console.log(Object.keys(obj))
console.log(Object.values(obj))

console.log(Object.entries(obj))

/* var obj2 = obj

console.log(obj2)

obj2.x = 70
obj.y = 150

console.log(obj)
console.log(obj2) */

var obj2 = Object.assign({}, obj)
obj2.x = 10

console.log(obj)
console.log(obj2)
