var name = 'The window'

var object = {
    name: 'My Object',

    getNameFunc : function () {
        return function () {
            return this.name
        }
    }
}

var func = object.getNameFunc()
console.log(func())

var obj2 = new (function Object2() {
    this.name = 'MyObject'

    this.getNameFunc = function () {
        return function () {
            return this.name
        }
    }
})
var func2 = obj2.getNameFunc()
console.log(func2())
console.log(func2.bind(obj2)())


var object3 = {
    name: 'My Object',

    getNameFunc : function () {
        var that = this
        return function () {
            return that.name
        }
    }
}

var func3 = object3.getNameFunc()
console.log(func3())