import Shape from "./Shape"

class Rectangle extends Shape{
    constructor (color, width, height) {
        super (color)
        this.width = width
        this.height = height
    }

    calculate () {
        return this.width * this.height
    }
}


export default Rectangle