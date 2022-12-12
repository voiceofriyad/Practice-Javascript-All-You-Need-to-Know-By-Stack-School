var Rectangle = function (width, height) {
    this.width = width
    this.height = height

    var position = {
        x : 20,
        y : 50
    }

    var print = function () {
        console.log ('My Width is: ' + this.width)
        console.log ('My Height is: ' + this.height)
    }.bind (this)

    this.draw = function () {
        console.log ('I am a rectangle')
        print ()
        //console.log (this)
        console.log ('Position: X = ' + position.x + ' Y = ' + position.y)
    }
    
}

var rect1 = new Rectangle (10, 5)
rect1.draw ()
