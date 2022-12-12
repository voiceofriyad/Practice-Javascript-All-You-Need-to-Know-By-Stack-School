/* function test() {
    var msg = 'I am Learning Lexical Scope and Closure'

    function sayMsg() {
        console.log(msg)
    }

    sayMsg()
}

test()  

function test() {
    var msg = 'I am Learning Lexical Scope and Closure'
    
    return function() {
        console.log(msg)
    }
}

var sayMsg = test()
sayMsg() */

/* for (var i = 1; i <= 5; i++) {
    
    setTimeout(function() {
        console.log(i)
    }, 1000 * i)    
} 
 */

for (var i = 1; i <= 5; i++) {
    (function(n) {
        setTimeout(function() {
            console.log(n)
        }, 1000 * n)
    })(i) 
} 
