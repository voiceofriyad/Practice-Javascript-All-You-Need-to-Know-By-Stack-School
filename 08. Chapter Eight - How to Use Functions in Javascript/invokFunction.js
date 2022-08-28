function test(){
    console.log('I am a function')
}

test()
test()
test()

for(var i = 0; i < 10; i++){
    test()
}

function add(){
    var a = 20
    var b = 10
    console.log(a + b)
}

function sub(){
    var a = 20
    var b = 10
    console.log(a - b)
}

add()
sub()