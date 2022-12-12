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

    // this.getPosition = function () {
    //     return position
    // }
    
    Object.defineProperty (this, 'position', {
        get : function () {
            return position
        },
        set : function (value) {
            position = value
        }
    })
    
    
}

var rect1 = new Rectangle (10, 5)
rect1.draw ()

//console.log (rect1.getPosition ())

console.log (rect1.position)

rect1.position = {
    x : 45,
    y : 500
}

console.log (rect1.position)