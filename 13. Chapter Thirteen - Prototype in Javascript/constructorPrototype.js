function Person (name) {
    this.name = name
}

Person.prototype.PI = 3.1416

var p1 = new Person ('Riyad')
var p2 = new Person ('Faysal')

console.log (p1)
console.log (p2)

// console.log (Object.getPrototypeOf (p1))
// console.log (Person.prototype)ll