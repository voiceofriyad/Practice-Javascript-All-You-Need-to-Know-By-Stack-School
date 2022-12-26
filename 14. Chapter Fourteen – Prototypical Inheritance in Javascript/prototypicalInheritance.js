function Shape () {

}

Shape.prototype.common = function () {
    console.log ('I am Common Method')
}

function Square (width) {
    this.width = width
}

Square.prototype = Object.create (Shape.prototype)

Square.prototype.draw = function () {
    console.log ('Drawing')
} 

function Circle () {

}

Circle.prototype = Object.create (Shape.prototype)

var sqr = new Square (45)
var cir = new Circle ()