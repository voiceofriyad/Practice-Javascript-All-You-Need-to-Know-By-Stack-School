var Rectangle = function(width, height) {

    this.width = width
    this.height = height

    var position = {
        x : 56,
        y : -100
    }
      
    var printProperties = function() { 
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }.bind (this) 
    
    // this.getPosition = function () {
    //     return position
    // }

    this.draw = function() {
        console.log('I am a rectangle')
        printProperties()
        //console.log (this)
        console.log ('Position : X = ' + position.x + ' Y = ' + position.y)
    }

    Object.defineProperty (this, 'position', {
        get : function () {
            return position
        },
        set : function (Value) {
            position = Value
        }
    })
}

var rect1 = new Rectangle(10, 8)
rect1.draw()

console.log (rect1.position)
rect1.position =  {
    x : 20,
    y : 200
}
console.log (rect1.position)