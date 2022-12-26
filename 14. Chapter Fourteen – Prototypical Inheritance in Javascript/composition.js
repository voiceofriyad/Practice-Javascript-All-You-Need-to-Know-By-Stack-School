function mixin (target, ...sources) {
    Object.assign (target.prototype, ...sources)
}

var canWalk = {
    walk : function () {
        console.log ('Walking.....')
    }
}

var canEat = {
    eat : function () {
        console.log ('Eating.......')
    }
}

var canSwim = {
    swim : function () {
        console.log ('Swimming......')
    }
}

// var person = Object.assign ({}, canWalk, canEat)
// person.name = 'Riyad'
// console.log (person)

function Person (name) {
    this.name = name
}

//Object.assign (Person.prototype, canWalk, canEat)
mixin (Person, canWalk, canEat)

var person = new Person ('Faysal Riyad')
console.log (person)

function GoldFish (name) {
    this.name = name
}

mixin (GoldFish, canEat, canSwim)

var fish = new GoldFish ('golu golu')
console.log (fish)