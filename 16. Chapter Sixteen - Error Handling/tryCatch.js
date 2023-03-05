function makeWords (text) {
    try {
        let str = text.trim ()
        let words = str.split (' ')
        return words
    } catch (e) {
        // console.dir (e)
        // console.dir (e.message)
        // console.log (e.message)

        console.log ('Please Provide a Valid Text.')
    }    
}

let words = makeWords (23)
console.log (words)

let words2 = makeWords ('Faysal Riyad')
console.log (words2)