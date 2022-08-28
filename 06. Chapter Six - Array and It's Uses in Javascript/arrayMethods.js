var arr = [1, 2, 3, 4, 5] 

console.log(arr.join(' | '))
console.log(arr.join(', '))


arr.fill('Riyad')
console.log(arr)



arr2 = [10, 20, 30, 40, 50] 
arr3 = [100, 200, 300, 400, 500] 

arr4 =  arr2.concat(arr3)
console.log(arr4)



console.log(Array.isArray(arr3))
console.log(Array.isArray(arr))



var arr5 = [5, 10, 15, 20, 25]


var arr6 = Array.from(arr5)
console.log(arr6)

var arr6 = arr5
console.log(arr6)

var a = [1, 2]
var b  = a

b[0] = 5

console.log(a)


var c = [1, 2, 3]
var d = Array.from(c)

d[1] = 20

console.log(c)
console.log(d)


