var createRect = function(width, height) {
    return {
        width : width,
        height: height,
    
        draw: function() {
            console.log('I am a rectangle')
            this.printProperties()
        },
    
        printProperties: function() { 
            console.log('My Width is ' + this.width)
            console.log('My Height is ' + this.height)
        }
    }   
}

var rect1 = createRect(10, 8)
rect1.draw()

var rect1 = createRect(15, 12)
rect1.draw()

