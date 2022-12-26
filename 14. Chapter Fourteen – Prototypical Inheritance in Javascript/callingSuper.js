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

Square.prototype = Object.create (Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.draw = function () {
    console.log ('Drawing')
} 


var sqr = new Square (45, 'green')
