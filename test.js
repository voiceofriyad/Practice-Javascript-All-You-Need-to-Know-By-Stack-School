// var age = 13
// var name = 'Riyad'

// console.log ('My name is ' + name + ' and I am ' + age + ' years old.')

// console.log (`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not ' : ''}adult.`)

// console.log (name.includes ('a'))
// console.log (name.padStart (15, 'a'))
// console.log (name.padEnd (15, 'd'))

// console.log ('Sara '.repeat (10))


// if (true) {
//     let a = 10
// }

// console.log (a)

// for (let i = 0; i < 10; i++) {

// }

// console.log (i)

// {
//     let iAmLet = 'I am Let'
// }
// console.log (iAmLet)

// (function () {
//     var abc = 'ABC'
//     console.log (abc)
// })()

// console.log (abc)


// function add (a, b) {
//     return a + b
// }

// let sum = (a, b) => a + b
// console.log (sum (2, 3))

// let sqr = x => x * x
// console.log (sqr (5))

// function testMe () {
//     console.log (this)
// }

// testMe ()
// testMe.call ({})

// let obj = {
//     name : 'Riyad',
//     print : () => {
//         console.log (this.name)
//     }
// }

// obj.print ()

// let obj = {
//     name : 'Riyad',
//     print : function () {
//         console.log (this)
//         setTimeout (function () {
//             console.log (this)
//             console.log (`Hello, ${this.name}`)
//         }, 1000)
//     }
// }

// obj.print ()

// let a = {
//     name : 'Faysal',
//     print : function () {
//         setTimeout (() => {
//             console.log (`Hello, ${this.name}`)
//         }, 1000)
//     }
// }

// a.print ()

// function sqr (n = 9) {
//     return n * n
// }

// console.log (sqr ())

// function greet (name = 'Faysal', msg = 'Hi') {
//     console.log (name.length)
//     console.log (`${msg}! ${name}`)
// }

// greet ('', 'Hello')


// function sum () {
//     let add = 0
//     for (let i = 0; i < arguments.length; i++) {
//         add += arguments [i]
//     }
//     return add
// }

// console.log (sum (1, 2, 3, 4))


// function add (...rest) {
//     return rest.reduce ((a, b) => a + b)
// }

// console.log (add (1, 2, 3, 4, 5))

// let a = [1, 2, 3]
// console.log (a)
// console.log (...a)

// let obj = {
//     a : 10,
//     b : 20,
//     c : 30
// }

// let obj2 = {
//     d : 40,
//     ...obj,
//     e : 50
// }

// console.log (obj)
// console.log (obj2)


// let a  = 10, b = 20

// let obj = {
//     a,
//     b,
//     print () {
//         console.log (this)
//     }
// }

// console.log (obj)


// var person ={
//     name : 'Faysal Riyad',
//     email : 'hello@riyad.xyz',
//     address : {
//         city : 'Dhaka',
//         country : 'Bangladesh'
//     }
// }

// let name = person.name
// let email = person.email

// console.log (person)
// console.log (name)
// console.log (email)


// let {name, email, address, address : {city, country}} = person
// console.log (name, email, address, city, country)


// let arr = [1, 2, 3, 4, 5]
// let [first, second, , , last] = arr
// console.log (first, second, last)


// let obj = {
//     a : 10,
//     b : 20
// }

// let a = Object.entries (obj)

// console.log (a)
// console.log (a [0][1])

// let objArr = [
//     ['a', 10],
//     ['b', 20]
// ]

// console.log (objArr [0][0])

// console.log (Object.fromEntries (objArr))


// let s1 = Symbol ('test')
// let s2 = Symbol ('test')

// console.log (s1)
// console.log (s2)

// console.log (s1 === s2)

// let toss = {
//     HEAD : Symbol ('HEAD'),
//     TAIL : Symbol ('TAIL')
// }

// console.log (toss)
// console.log (toss.HEAD)


// const arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
//     console.log (arr [i])
// }

// function createIterator (collection) {
//     let i = 0
//     return {
//         next () {
//             return {
//                 done : i >= collection.length,
//                 value : collection [i]++
//             }
//         }
//     }
// }


// let iterate = createIterator (arr)
// console.log (iterate.next ())
// console.dir (iterate.next) 
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())


// let iterate = arr [Symbol.iterator] ()
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())


// let str = 'Riyad'
// let iterateStr = str [Symbol.iterator] ()
// console.log (iterateStr.next ())
// console.log (iterateStr.next ())
// console.log (iterateStr.next ())
// console.log (iterateStr.next ())
// console.log (iterateStr.next ())
// console.log (iterateStr.next ())


// for (let i of arr) {
//     console.log (i)
// }

// for (let v of 'Faysal Riyad') {
//     console.log (v)
// }


// let obj = {
//     a : 10,
//     b : 20
// }

// for (let v of obj) {
//     console.log (v)
// }


// let obj = {
//     start : 1,
//     end : 5,
//     [Symbol.iterator] () {
//         let currentValue = this.start
//         const self = this
//         return {
//             next () {
//                 return {
//                     value : currentValue > self.end ? undefined : currentValue++,
//                     done : currentValue > self.end
//                 }
//             }
//         }
//     }
// }

// for (let v of obj) {
//     console.log (v)
// }

// let iterate = obj [Symbol.iterator] ()
// console.log (iterate)
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())



// let obj = {
//     start : 1,
//     end : 5,
//     [Symbol.iterator] : function* () {
//         let currentValue = this.start
//         while (currentValue <= this.end) {
//             yield currentValue++
//         }
//     }
// }

// let iterate = obj [Symbol.iterator] ()
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())
// console.log (iterate.next ())


// function* generate () {
//     yield 1
//     yield 2
//     yield 5
// }

// let it = generate ()
// console.log (it.next ())
// console.log (it.next ())
// console.log (it.next ())
// console.log (it.next ())

// let arr = [10, 20, 30]
// function* generate (collection) {
//     for (let i = 0; i < collection.length; i++) {
//         yield collection [i]
//     }
// }

// let it = generate (arr)
// console.log (it.next ())
// console.log (it.next ())
// console.log (it.next ())
// console.log (it.next ())


// let set = new Set ([1, 2, 3])
// let set = new Set ()
// set.add (5)
// set.add (6)
// set.add (5)
// console.log (set)
// console.log (set.size)

// set.clear ()
// set.delete (6)
// console.log (set.has (5))
// console.log (set.keys ())
// console.log (set.values ())

// let keyIterate = set.keys ()
// console.log (keyIterate.next ())
// console.log (keyIterate.next ())
// console.log (keyIterate.next ())

// for (let v of set) {
//     console.log (v)
// }

// console.log (set.entries ())


// let map = new Map ([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])

// map.set ('d', 40)
// console.log (map)
// console.log (map.size)


// map.delete ('c')
// console.log (map)

// console.log (map.get ('a'))
// console.log (map.get (20))

// console.log (map.values ())
// console.log (map.keys ())
// console.log (map.entries ())

// map.set ({name : 'Riyad'}, 45)

// for (let [k, v] of map) {
//     console.log (k, v)
// }

// map.forEach ((v, k) => {
//     console.log (k, v)
// })


// console.log (map)


// let a = {a : 10}, b = {b : 20}
// let set = new Set ([a, b])

// a = null
// console.log (set)

// let arr = [...set]
// console.log (arr)
// console.log (arr [1])

// let weakSet = new WeakSet ([a, b])
// a = null
// console.log (weakSet)
// console.log (weakSet.has (a))


// let a = {a : 10}, b = {b : 20}

// let weakMap = new WeakMap ([[a, 45], [b, 50]])
// let weakMap2 = new WeakMap ([[a], [b]])

// console.log (weakMap)
// console.log (weakMap2)

// console.log (weakMap.get (a))

// b = null
// console.log (weakMap)
// console.log (weakMap.has (b))



// let n = 10

// if (n > 5) {
//     throw new Error ('n is greater than 10')
// }

// let n = Number.parseInt ('45.656')
// console.log (n)

// function changeToInt (v) {
//     let result = Number.parseInt (v)

//     if (!result) {
//         return 'please provide'
//     } 

//     return result
// }

// let result = changeToInt ('hkj56.465')
// console.log (result)

// function makeWords (text) {
//     // let str = text.trim ()
//     // let words = str.split (' ')
//     // return words

//     try {
//         let str = text.trim ()
//         let words = str.split (' ')
//         return words
//     } catch (e) {
//         // console.log (e.message)
//         console.log ('provide valid text')
//     }
// }

// // let words = makeWords ('       make make tea')
// // console.log (words)

// let words = makeWords (59)
// console.log (words)

// class CustomError extends Error {
//     constructor (msg) {
//         super (msg)

//         if (Error.captureStackTrace) {
//             Error.captureStackTrace (this, CustomError)
//         }
//     }
// }

// try {
//     console.log ('I am line 1')
//     // console.error ('I am line 2')
//     console.log ('I am line 3')
//     throw new CustomError ('I am Error')
//     console.log ('I am line 5')
// } catch (e) {
//     console.log (e)
//     console.log ('this is custom error')
// } finally {
//     console.log ('I am Finally')
// }

