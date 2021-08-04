var name = ''
var fullname = ''

if (name.length == 0){
    fullname = 'Md. Faysal Alam Riyad'
} else {
    fullname = name
}
 console.log(fullname)

var name = ''
var fullname = name || 'Md. Faysal Alam Riyad'

console.log(fullname)

var name = 'riyad'
var fullname = name || 'Md. Faysal Alam Riyad'

console.log(fullname)

var isOK = true

if (isOK) {
    console.log('Everything is OK')
 }

var isOK = true
isOK && console.log('Everything is OK')
