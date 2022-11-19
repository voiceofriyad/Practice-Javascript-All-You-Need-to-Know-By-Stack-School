var persons = [
    {
        name : 'S',
        age : 24
    },
    {
        name : 'D',
        age : 19
    },
    {
        name : 'd',
        age : 26
    },
    {
        name : 'l',
        age : 21
    }
]

var arr = [4, 8, 1, 6, 7, 9, 4, 3, 5, 6, 8, 2, 1, 7]

arr.sort (function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
}) 

console.log (arr)

persons.sort (function (a, b) {
    if (a.name > b.name) {
        return 1
    } else if (a.name < b.name) {
        return -1
    } else {
        return 0
    }
})

console.log (persons)


var es = arr.every (function (value) {
    return value > 0 
})

console.log (es)
