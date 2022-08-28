var point = {
    x: 10,
    y: 20,
    z: 30
}

point.x = undefined
console.log(point)


delete point.x
console.log(point)

delete point['y']
console.log(point)