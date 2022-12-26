function Square (width) {
    this.width = width

    // this.draw = function () {
    //     console.log ('Draw')
    // }
}

Square.prototype = {
    draw : function () {
        console.log ('Draw')
    },

    toString : function () {
        return 'My Width is = ' + this.width
    }
}

var sqr1 = new Square (10)
var sqr2 = new Square (5)
