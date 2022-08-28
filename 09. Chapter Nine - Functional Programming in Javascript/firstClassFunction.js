function add(a, b) {
    return a + b
}

var sum = add 
console.log(typeof sum)
console.log(sum(4, 5))

var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](2, 3))

var obj = {
    sum: add 
}

console.log(obj) 
console.log(obj.sum(2, 3))


setTimeout(function () {
    console.log('I have created...')
}, 5000)