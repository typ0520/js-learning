var array = [1, 2 ,3]
array.a = 'aa'
for (let v in array) {
    console.log(v)
}

for (let v of array) {
    console.log(v)
}

var it = array[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

//给对象添加迭代器

var obj = {
    a: 2,
    b: 3
}

Object.defineProperty(obj, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function() {
        var o = this
        var idx = 0
        var ks = Object.keys(o)
        return {
            next: function () {
                return {
                    value: o[ks[idx++]],
                    done: (idx > ks.length)
                }
            }
        }
    }
})

for (const value of obj) {
    console.log(value)
}