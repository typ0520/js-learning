//默认绑定(严格模式会报错)
function foo() {
    console.log(this.a)
}
var a = 2 
foo()

//隐式绑定
var obj2 = {
    a: 42,
    foo: foo
}
var obj1 = {
    a: 2,
    obj2: obj2
}
obj1.obj2.foo()

//隐式绑定丢失
function foo2() {
    console.log(this.b)
}
var obj = {
    b: 'obj',
    foo2: foo2
}
var bar = obj.foo2
var b ="oops, global"
bar()

function doFoo(fn) {
    fn()
}
doFoo(obj.foo2)

var aa = {}
var bb = Object.create(null)
var vv;