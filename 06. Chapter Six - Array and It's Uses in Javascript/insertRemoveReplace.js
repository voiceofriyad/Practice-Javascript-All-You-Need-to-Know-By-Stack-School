var arr = [1, 2, 3, 4, 5, 6, 7, 8]

arr[3] = 9
console.log(arr)

arr.push(9)
console.log(arr)

arr.push(20, 158, 520)
console.log(arr)

arr.unshift(20)
console.log(arr)


var arr2 = [5, 10, 15, 20, 25]
arr2.splice(3, 0, 100)
console.log(arr2)

arr2.splice(2, 0, 50, 350)
console.log(arr2)



var arr3 = [2, 4, 8, 10]

arr3.pop()
console.log(arr3)

arr3.shift()
console.log(arr3)

var arr4 = [10, 20, 30, 40, 50]
arr4.splice(2,1)
console.log(arr4)

var arr4 = [10, 20, 30, 40, 50]
arr4.splice(1,2)
console.log(arr4)



var arr5 = [100, 200, 300, 400, 500]
arr5.splice(2, 1, 256)
console.log(arr5)

