var obj = {
    x : 40,
    y : 60,
    z : 75
}

console.log('x' in obj)
console.log('p' in obj)


for (var i in obj) {
    console.log(i)
}

for (var x in obj) {
    console.log(obj[x])
}

for (var z in obj) {
    console.log(z + ': ' + obj[z])
}