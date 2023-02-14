// function Rectangle (width, height) {
//     this.width =  width
//     this.height = height
// }

// Rectangle.prototype.draw = function () {
//     console.log (this)
//     console.log ('Drawing....')
// }

// let rect1 = new Rectangle (10, 12)
// console.log (rect1)
// rect1.draw ()

class Rectangle {
    constructor (width, height) {
        this.width = width
        this.height = height
        this.another = () => {

        }
    }

    name = 'Riyad'
    test2 = function () {

    }

    draw () {
        console.log ('Drawing....')
    }
}

let rect1 = new Rectangle (10, 12)
console.log (rect1)
rect1.draw ()
console.log (rect1.name)
console.log (typeof Rectangle)
console.log (typeof rect1)