function foo () {
    console.log(a)
}

function bar () {
    var a = 3

    var f = foo
    f()
}

var a = 2
bar()

//js的作用域是词法作用域