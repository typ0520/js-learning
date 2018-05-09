(function(){
    function foo() {
        console.log(this.a)
    }
    var obj = {
        a: 2
    }
    foo.call(obj)//硬绑定
    var bar = function () {
        foo.call(obj)
    }
    bar()
    setTimeout(bar, 100)
})()

//new绑定