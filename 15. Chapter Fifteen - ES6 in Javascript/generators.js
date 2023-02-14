let obj = {
    start : 1,
    end : 5,
    [Symbol.iterator] : function* () {
        let currentValue = this.start
        while (currentValue <= this.end) {
            yield currentValue++
        }
    }
}

let iterate = obj [Symbol.iterator] ()
console.log (iterate.next ())
console.log (iterate.next ())
console.log (iterate.next ())
console.log (iterate.next ())
console.log (iterate.next ())
console.log (iterate.next ())


function* generate () {
    yield 'Riyad'
    yield 'Sara'
    yield 1
    yield 2
    yield 3
}

let it = generate ()
console.log (it.next ())
console.log (it.next ())
console.log (it.next ())
console.log (it.next ())
console.log (it.next ())
console.log (it.next ())


let arr = [10, 20, 30, 40, 50]

function* genArr (collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection [i]
    }
}

let a = genArr (arr)
console.log (a.next ())
console.log (a.next ())
console.log (a.next ())
console.log (a.next ())
console.log (a.next ())
console.log (a.next ())