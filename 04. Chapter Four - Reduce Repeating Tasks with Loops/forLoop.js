for (var i = 0; i < 10; i++){
    console.log((i+1) + ' riyad')
}

for (var i = 1; i<= 10; i++){
    console.log(i)
}

for (var i = 1; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

for (var i = 1; i <= 10; i++){
    if (i % 2 == 1){
        console.log(i)
    }
}

sum = 0
for (var i = 1; i <= 10; i++) {
    sum = sum + i
}
console.log(sum)

sum = 0
for (var i = 1; i <= 10; i++) {
    var result = sum
    var sum = sum + i
    console.log(result + ' + ' + i + ' = ' + sum)     
}

sum = 0
for (var i = 1; i <= 10; i++) {
    console.log(sum + ' + ' + i + ' = ' + (sum + i)) 
    sum = sum + i    
}

sum = 0
for (var i = 1; i <= 100; i++){
    if (i % 2 == 0){
        sum = sum + i
    }
}
console.log('result = ' + sum)

