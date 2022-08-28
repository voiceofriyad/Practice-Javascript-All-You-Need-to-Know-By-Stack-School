/* function test(a, b, c){
    console.log(arguments)
}

test() */

/* function test(a, b, c){
    console.log(JSON.stringify(arguments))
    console.log(typeof a)
}

test()
 */

/* function test(a, b, c){
    console.log(arguments)   
}

test(10, 20, 30)
 */

function test(a, b, c){
    for( var i = 0; i < arguments.length; i++){
        console.log(arguments[i]) 
    }   
}

test(10, 20, 30)


function addAll(){
    var sum = 0
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(10, 20, 30)
addAll(1, 2, 3, 4, 5)
