// const delay = s => new Promise (resolve => setTimeout (resolve, s * 1000))


// delay (2).then (() => console.log ('2 Seconds Delay'))
// delay (1).then (() => console.log ('1 Seconds Delay'))
// delay (3).then (() => console.log ('3 Seconds Delay'))
// delay (2).then (() => console.log ('2 Seconds Delay'))
// delay (5).then (() => console.log ('5 Seconds Delay'))


// let p1 = Promise.resolve ('Test')
// // console.log (p1)
// p1.then (v => console.log (v))

// let p2 = Promise.reject ('REJECT')
// p2.catch (e => console.log (e))


// let p1 = Promise.resolve ('One')
// let p2 = Promise.resolve ('Two')
// let p3 = Promise.resolve ('Three')

// let promiseArr = [p1, p2, p3]
// Promise.all (promiseArr)
// .then (arr => {
//     console.log (arr)
// })


let p1 = new Promise (resolve => {
    setTimeout (resolve, 5000, 'One')
})

let p2 = new Promise (resolve => {
    setTimeout (resolve, 3000, 'Two')
})

let p3 = new Promise (resolve => {
    setTimeout (resolve, 4000, 'Three')
})

let promiseArr = [p1, p2, p3]

Promise.all (promiseArr)
    .then (arr => console.log (arr))


Promise.race (promiseArr)
    .then (v => console.log (v))