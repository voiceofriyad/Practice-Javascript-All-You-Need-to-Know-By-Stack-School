// let p1 = new Promise ((resolve, reject) => {
//     setTimeout (resolve, 5000, 'One')
// })

// let p2 = new Promise ((resolve, reject) => {
//     setTimeout (resolve, 3000, 'Two')
// })

// // console.log (p1)
// // console.log (p2)

// p1.then ((v) => {
//     console.log (v)
// }).catch ((e) => {
//     console.log (e)
// })

// p2.then ((v) => {
//     console.log (v)
// })



function getIphone (isPassed) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (isPassed) {
                resolve ('I have got an I Phone')
            } else {
                // reject ('You have failed')
                reject (new Error ('You have failed'))
            }
        }, 2000)
    })
}

// console.log (getIphone (false))
// console.log (getIphone (true))

getIphone (true)
    .then ((res) => {
        console.log (res)
    })
    .catch ((err) => {
        console.log (err.message)
    })


getIphone (false)
    .then ((res) => {
        console.log (res)
    })
    .catch ((err) => {
        console.log (err.message)
    })