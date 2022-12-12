// Pass by Value vs Pass by Reference
// Call by Value vs Call by Reference

var n = 10

function change (n) {
    n = n + 100
    console.log (n)
}

change (n)

console.log (n)

var obj = {
    a : 10,
    b : 20
}

function changeMe (obj) {
    obj.a += 100
    obj.b += 100

    console.log (obj)
}

changeMe (obj)

console.log (obj)