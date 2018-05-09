function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, " + identify.call(this);
    console.log(greeting)
}

var me = {
    name: 'kyle'
}

var you = {
    name: 'Reader'
}

console.log(identify.call(me))
console.log(identify.call(you))

speak.call(me)
speak.call(you)


function foo() {
    this.aaa = 10086
}

foo()
var that = this
console.log(this.aaa)
