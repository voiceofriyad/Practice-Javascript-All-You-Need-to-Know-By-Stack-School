const _radius = Symbol ()
const _name = Symbol ()
const _draw = Symbol ()

class Circle {
    constructor (radius, name)  {
        this [_radius] = radius
        this [_name] = name
    }

    [_draw] () {
        console.log ('Drawing....')
    }
}

let c1 = new Circle (2, 'CRED')
console.log (c1)

console.log (Object.getOwnPropertyNames (c1))
console.log (Object.getOwnPropertySymbols (c1))

let key = Object.getOwnPropertySymbols (c1)[0]
console.log (key)
console.log (c1 [key])

console.log (c1 [_name])
console.log ( [_name])
console.log ( _name)

