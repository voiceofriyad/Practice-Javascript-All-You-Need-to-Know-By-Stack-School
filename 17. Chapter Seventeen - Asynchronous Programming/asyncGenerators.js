async function * myAsyncGenerators () {
    let i = 0

    while (true) {
        if (i > 5) return
        yield await Promise.resolve (i++)
    }
}

; (async function () {
    for await (let v of myAsyncGenerators ()) {
        console.log (v)
    }
}) ()