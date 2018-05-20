//生成器委托

function *foo () {
    console.log('*foo() start')
    yield 3
    yield 4
    console.log('*foo() finish')
}

function *bar() {
    yield 1
    yield 2
    yield *foo()
    yield 5
}

var it = bar()
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)