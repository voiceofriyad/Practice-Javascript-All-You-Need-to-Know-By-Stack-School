// 'use strict'

// function Shape () {
//     this.draw = function () {
//         console.log (this)
//     }
// }

// let s1 = new Shape ()
// s1.draw ()
// let another = s1.draw
// another ()


class Person {
    constructor (name, email) {
        this.name = name
        this.Email = email
    }

    print () {
        console.log (this.name, this.Email)
    }

    test () {
        console.log (this)
    }

    static create (str) {
        let person = JSON.parse (str)
        return new Person (person.name, person.emailo)
    }
}

let p1 = new Person ('Riyad', 'riyad@me.com')
// console.log (p1)
// p1.print ()

let str1 = '{"name" : "Faysal", "emailo" : "faysal@me.com"}'

let p2 = Person.create (str1)
// console.log (p2)
// p2.print ()


p1.test ()

let p3 = p1.test
p3 ()

let p4 = p2.test
p4 ()