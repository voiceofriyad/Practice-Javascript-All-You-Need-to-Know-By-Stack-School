var creatRect = function(width, height) {
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



var rect1 = creatRect(10, 8)
rect1.draw()





var Rectangle = function(width, height) {

    this.width = width
    this.height = height
    
    this.draw = function() {
        console.log('I am a rectangle')
        this.printProperties()
    }
    
    this.printProperties = function() { 
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }  
}


var rect2 = new Rectangle(25, 12)
rect2.draw()

var str =  new String('str')
console.log('My String is ' + str)
console.log(str)

var str2 =  String('str')
console.log('My String is ' + str2)
console.log(str2)
