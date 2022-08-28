/* function addAll(){
    var sum = 0
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}

var a = addAll(10, 20, 30)
var b = addAll(1, 2, 3, 4, 5)

console.log(a, b) */

function addAll(){
    var sum = 0
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    
    return sum
}

var result = addAll(10, 20, 30)

console.log(result)



function person(name, email) {
    return {
        name: name,
        email: email
    }
   
    console.log('I will never be shown')
}

var p1 = person('Riyad', 'riyad@alu.com')
console.log(p1)