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

Square.prototype.draw = function () {
    console.log ('Drawing')
} 

function Circle (radius, color) {
    this.radius = radius
    Shape.call (this, color)
}

extend (Shape, Circle)

var sqr = new Square (45, 'green')
var cir = new Circle (5, 'red')

