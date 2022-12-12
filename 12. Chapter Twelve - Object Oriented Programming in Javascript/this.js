var rect = {
    width : 100,
    height: 50,

    draw: function() {
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    },

    printProperties: function() { 
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }
}

rect.draw()



function myFunc() {
    console.log(this)
    rect.printProperties()
}

new myFunc()

var another = {
    width: 47,
    height: 56,
    print: rect.printProperties
}
console.log(another)
another.print()
