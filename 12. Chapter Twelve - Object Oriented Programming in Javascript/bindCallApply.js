function myFunc (c, d) {
    console.log (this)
    console.log (this.a + this.b + c + d)
}

//myFunc () 

myFunc.call ({a : 40, b : 25}, 10, 5)

myFunc.apply ({a : 400, b : 250}, [10, 5])

myFunc.bind ({a : 7, b : 3}, 5, 5).call ()
myFunc.bind ({a : 7, b : 3}, 5, 5).apply ()

var testBind = myFunc.bind ({a : 7, b : 3}, 5, 5)
testBind ()

var testBind = myFunc.bind ({a : 7, b : 3})
testBind (5, 5)