function *foo(x) {
    var y = x * (yield 'hello')
    return y
}

var it = foo(6)
console.log(it.next())

var result = it.next(7)
console.log(result)