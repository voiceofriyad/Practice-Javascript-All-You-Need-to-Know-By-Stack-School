function test (a, b) {
    console.log (a + b)
    console.log ('Something')
}

console.log (test.name, test.length)

var Rect = new Function ('width', 'height', 
    `this.width = width
    this.height = height

    this.draw = function() {
        console.log('I am a rectangle')
        this.printProperties()
        console.log (this)
    }

    this.printProperties = function() { 
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    } ` 
)

console.log (new Rect (2, 3))

var rect = new Rect (4, 5)
console.log (rect)

rect.draw ()

var Add = new Function ('a', 'b', `console.log (a + b)`)
new Add (2, 3)