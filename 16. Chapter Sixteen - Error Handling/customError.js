class CustomError extends Error {
    constructor (msg) {
        super (msg)

        if (Error.captureStackTrace) {
            Error.captureStackTrace (this, CustomError)
        }
    }
}


try {
    console.log ('I am Line 1')
    throw new CustomError ('I am Your Error')
    console.log ('I am Line 2')
    console.log ('I am Line 3')
} catch (e) {
    console.log (e.message)
    console.log ('This is a custom error message.')
} finally {
    console.log ('I am Finally Block')
}

