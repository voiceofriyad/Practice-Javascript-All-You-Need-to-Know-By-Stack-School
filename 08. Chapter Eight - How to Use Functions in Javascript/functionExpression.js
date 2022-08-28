/* var addition =  function add(a, b){
    return a + b
}

addition(10, 40)
 */


var addition =  function(a, b){
    return a + b
}

addition(10, 40)

var another = addition
console.log(another)
console.log(another(20, 50))



setTimeout(function(){
    console.log('I will call after 5 second')
}, 5000)
