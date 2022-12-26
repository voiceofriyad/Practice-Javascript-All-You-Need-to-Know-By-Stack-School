function Square (width, height) {
    this.width = width
    this.height = height
    this.getHeight = function () {
        console.log ('My Height is = ' + this.height)
        this.draw ()
    }
}

Square.prototype = {
    draw : function () {
        console.log ('Draw')
    },

    toString : function () {
        this.getHeight ()
        return 'My Width is = ' + this.width
    }
}

var sqr1 = new Square (10, 15)
var sqr2 = new Square (5, 20)
