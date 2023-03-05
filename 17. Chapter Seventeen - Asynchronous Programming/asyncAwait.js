// function myPromise () {
//     return Promise.resolve ('Test Value')
// }

// console.log (myPromise ())

// async function test () {
//     return 'Test'
// }

// // console.log (test ())

// test ().then (v => alert (v))

// let p1 = Promise.resolve ('I am a Promise')

// let p1 = new Promise (resolve => {
//     setTimeout (resolve, 5000, 'Test Value')
// })

// async function myAsyncFunc () {
//     // p1.then (v => alert (v))
//     let v = await p1
//     // console.log ('Test')
//     console.log (v)
// }

// myAsyncFunc ()


// async function fetchData () {
//     let res = await fetch ('https://jsonplaceholder.typicode.com/users')

//     let data = await res.json ()

//     let names = data.map (u => u.name)
//     console.log (names)

//     // console.log (data)
//     // console.log (res.json ())
// }

// fetchData ()


// async function fetchData () {
//     try {
//         let res = await fetch ('https://jsonplaceholder.typicode.com/users')

//         let data = await res.json ()

//         let names = data.map (u => u.name)

//         console.log (names)
//     } catch (e) {
//         console.log (e.message)
//     }
// }

// fetchData ()


let promises = [Promise. resolve (1), Promise. resolve (2), Promise. resolve (3)]

async function promiseAll () {
    let result = await Promise.all (promises)
    console.log (result)
}

promiseAll ()