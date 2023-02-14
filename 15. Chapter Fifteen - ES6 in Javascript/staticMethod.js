// class Rectangle {
//     constructor (width, height) {
//         this.width = width
//         this.height = height
//         this.another = () => {

//         }
//     }

//     name = 'Riyad'
//     test2 = function () {

//     }

//     draw () {
//         console.log ('Drawing....')
//     }
// }

// let rect1 = new Rectangle (10, 12)
// console.log (rect1)
// rect1.draw ()
// console.log (rect1.name)
// console.log (typeof Rectangle)
// console.log (typeof rect1)





class Person {
    constructor (name, email) {
        this.name = name
        this.Email = email
    }

    print () {
        console.log (this.name, this.Email)
    }

    static create (str) {
        let person = JSON.parse (str)
        return new Person (person.name, person.emailo)
    }
}

let p1 = new Person ('Riyad', 'riyad@me.com')
console.log (p1)
p1.print ()

let str1 = '{"name" : "Faysal", "emailo" : "faysal@me.com"}'

let p2 = Person.create (str1)
console.log (p2)
console.log (p1 instanceof Person)
p2.print ()