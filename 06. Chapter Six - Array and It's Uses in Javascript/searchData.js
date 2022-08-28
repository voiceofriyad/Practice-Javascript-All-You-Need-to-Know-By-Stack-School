var arr = [5, 10, 15, 20, 25 ,30]

var find = 50

for (var i = 0; i < arr.length; i++) {
    if(arr[i] === find){
        console.log('Data Found at Index ' + i)
        break
    } else{
        console.log('Data Not Found')
    }
}



var arr2 = [10, 20, 30, 40, 50]

var find = 30
var isFound = false

for(var i = 0; i < arr2.length; i++){
    if(arr2[i] === find){
        console.log('Data Found at Index ' + i)
        isFound = true
        break
    }
}

if(!isFound){
    console.log('Data Not Found')
}


var arr3 = [1, 2, 3, 4, 5]
var find = 4
var isFound

for(var i = 0; i < arr3.length; i++){
    if(arr3[i] === find){
        isFound = 'Data Found at index ' + i 
        break        
    } else{
        isFound = 'Data Not Found'
    }
}

console.log(isFound)