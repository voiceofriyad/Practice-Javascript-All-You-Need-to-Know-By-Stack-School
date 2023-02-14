const arr = [1, 2, 3, 4, 5]

for (let i in arr) {
    console.log (i)
}

for (let i of arr) {
    console.log (i)
}

for (let i in 'Sara') {
    console.log (i)
}

for (let i of 'Sara') {
    console.log (i)
}

let obj = {
    x : 10,
    y : 20
}

for (let i in obj) {
    console.log (i)
}

for (let i of obj) {
    console.log (i)
}