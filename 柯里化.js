function foo(a, b) {
    var args = arguments
    var curried = [].splice.call(arguments, 1)
    console.log("a = " + a + " ,b = " + b)
}
foo(11, 22)
var bar = foo.bind(null, 2)
bar(3)