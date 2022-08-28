var b = 10 

function a() {
    console.log(b)
}

a()


function c() {
    var x = 5 

    return function () {
        console.log(x)
    }
   
}

var xyz =  c()
console.log(xyz)
console.log(xyz())

var abc = c() 
console.dir(abc)