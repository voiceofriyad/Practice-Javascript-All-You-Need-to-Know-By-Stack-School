try {
    console.log ('I am Line 1')
    throw new Error ('I am Your Error')
    console.log ('I am Line 2')
    console.log ('I am Line 3')
} catch (e) {
    console.log (e)
    console.log (e.message)
}





