function add(a, b){
    var result = a + b
    console.log(result)
}

add(10, 20)
add(50, 100)
add(50)
add()


var arr1 = [10, 20, 30, 40, 50]
var arr2 = [100, 200, 300, 400, 500]
var arr3 = [1, 2, 3, 4, 5]

function sumOfArray(arr){
    var sum = 0

    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }

    console.log(sum)
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)

