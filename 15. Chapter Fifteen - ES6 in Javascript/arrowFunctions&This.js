// function testMe () {
//     console.log (this)
// }

// testMe ()
// testMe.call ({})

// let obj = {
//     name : 'Riyad',
//     print : function () {
//         console.log (this)
//         console.log (this.name)
//     }
// }

// obj.print ()

// let obj2 = {
//     name : 'Riyad',
//     print : () => {
//         console.log (this)
//         console.log (this.name)
//     }
// }

// obj2.print ()


// let obj3 = {
//     name : 'Riyad',
//     print : function () {
//         // console.log (this.name)
//         // let self = this
//         setTimeout (function () {
//             // console.log (this)
//             console.log (`Hello, ${this.name}`)
//         }.bind (this), 1000) 
//     }
// }

// obj3.print ()


let obj4 = {
    name : 'Riyad',
    print : function () {
        setTimeout (() => {
            console.log (this)
            console.log (`Hello, ${this.name}`)
        }, 1000) 
    }
}

obj4.print ()