function sqr(n) {
    return n * n
}

console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))

var n = 10

function change() {
    n = 100
}

console.log(n)
change()
console.log(n)


var point = {
    x: 45,
    y: 30
}

console.log(point) 

function printPoint(point) {
    point.x = 100 
    point.y = 200 

    console.log(point)
}

console.log(point) 
printPoint(point)
console.log(point)