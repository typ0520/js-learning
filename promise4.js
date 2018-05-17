//是否是可以信任的Promise

//p不是Promise
var p = {
    then: function (cb) {
        cb(42)
    }
}

p.then(
    function fulfilled(val) {
        console.log(val)
    },
    function rejected(err) {
        //永远不会到达这里
    }
)

//包装一层可以解决上面的问题
Promise.resolve(p).then(
    function fulfilled(val) {
        console.log(val)
    },
    function rejected(err) {
        //永远不会到达这里
    }
)