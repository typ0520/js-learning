a = 2
var a
console.log(a)//输出2
/*
var a
a = 2
console.log(a)
*/

console.log(b)//输出undefined
var b = 3
console.log(b)//输出3
/**
 var b
 console.log(b)
 b = 3
 console.log(b)
 */

//变量和函数声明从他们在额代码中出现的位置被移动到了最上面，这个过程叫提升
foo()
function foo() {
    console.log(a)//输出undefined
    var a = 100
    console.log(a)//输出100
}
 /**
function foo () {
    var a
    console.log(a)//输出undefined
    a = 100
    console.log(a)//输出100
}
foo()
  */

//TypeError
foo2()
var foo2 = function () {
}
/**
 * var foo2
 * foo2() //此时foo2是undefined，所以会报TypeError，而不是ReferenceError
 * foo2 = function () {}
 */