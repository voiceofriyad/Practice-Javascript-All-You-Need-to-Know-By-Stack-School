var a = 10
var b = 20
var c = 60
var d = 40

if (a > b && c > d){
    console.log('A is greater than B and C is greater than D')
} else {
    console.log('At least one condition is false')
}


if (a > b || c > d){
    console.log('A is greater than B or C is greater than D')
} else {
    console.log('Both condition are false')
}

var check = (a >b)
console.log(check)

var check = !(a >b)
console.log(check)

var check = !!(a >b)
console.log(check)
