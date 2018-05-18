var z = 1

function *foo(x) {
    var x = yield 2
    z++
    var y = yield (x * z)
    console.log(x, y, z)
}

var it1 = foo()
console.log(it1.next())
console.log(it1.next(10))
console.log(it1.next(20))