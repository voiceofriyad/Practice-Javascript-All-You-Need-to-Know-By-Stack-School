function extend (Parent, Child) {
    Child.prototype = Object.create (Parent.prototype)
    Child.prototype.constructor = Child
}
function Shape (color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log ('I am Common Method')
}

function Square (width, color) {
    this.width = width
    Shape.call (this, color)
}

extend (Shape, Square)

Square.prototype.common = function () {    
    console.log ('I am Calling From Square and I have Overriding')
}

Square.prototype.draw = function () {
    console.log ('Drawing')
} 

function Circle (radius, color) {
    this.radius = radius
    Shape.call (this, color)
}

extend (Shape, Circle)

Circle.prototype.common = function () {    
    console.log ('I am Calling From Circle and I have Overriding')
}

var sp = new Shape ('blue')
var sqr = new Square (45, 'green')
var cir = new Circle (5, 'red')


var poly = [sp, sqr, cir] 

for (var i of poly) {
    i.common ()
}

console.log (cir instanceof Circle)
console.log (cir instanceof Shape)
console.log (cir instanceof Square)