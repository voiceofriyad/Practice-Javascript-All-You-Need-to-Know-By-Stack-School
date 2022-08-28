var arr = [4, 5, 1, 6, 8, 9, 40]

for (var i = 0; i < arr.length; i++){
    console.log(arr[i])
}



for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i] + 2
} 

console.log(arr)



sum = 0
for (var i = 0; i < arr.length; i++){
    sum = sum + arr[i]
} 

console.log(sum)


for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}



sum = 0

for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        sum = sum + arr[i]
    }
}

console.log(sum)