var obj = {
    get a () {
        return 2
    }
}

console.log(obj.a)


var obj2 = {
    get a () {
        return this._a_
    },
    set a (val) {
        this._a_ = val * 2
    }
}

obj2.a = 3
console.log(obj2.a)

var desc = Object.getOwnPropertyDescriptor(obj2, 'a')
console.log(desc)

Object.defineProperty(obj2, 'cc', {
    value: 22,
    configurable: true
})

var cc_desc = Object.getOwnPropertyDescriptor(obj2, 'cc')
console.log(cc_desc)