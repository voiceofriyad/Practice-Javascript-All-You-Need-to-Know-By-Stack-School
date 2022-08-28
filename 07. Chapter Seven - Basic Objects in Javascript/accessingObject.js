var point = {
    x: 10,
    y: 10,
    z: 15
}

console.log(point.x)
console.log(point.y)
console.log(point.x + point.z)
console.log(point.z - point.y)

var point2 = {
    a: 100,
    b: 50,
    c: 80
}

console.log(point2['a'])
console.log(point2['c'])
console.log(point2['c'] - point2['b'])

var show = 'a'
console.log(point2.show)
console.log(point2[show])

var show2 = 'x'
console.log(point[show2])