var x = 55
var y = 66

function test() {
    var x = 45
    console.log(x)

    function nested() {
        var y = 65
        console.log(x)
    }

    console.log(y)
    nested()

}
console.log(x)
test()
console.log(x)
console.log(x)
console.log(x)
