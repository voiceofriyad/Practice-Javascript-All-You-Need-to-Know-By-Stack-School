var point = {
    x: 10,
    y: 20,
    z: 30
}

point.x = 100
point['y'] = 200

point.a = 500

console.log(point)

console.log(point.h)


var prop = 'z'
point[prop] = 55
console.log(point)

