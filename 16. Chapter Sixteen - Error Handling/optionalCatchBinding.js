try {
    console.log ('I am Line 1')
    throw new Error ('I am Your Error')
    console.log ('I am Line 2')
    console.log ('I am Line 3')
} catch {
    console.log ('This is a custom error message.')
} finally {
    console.log ('I am Finally Block')
}

