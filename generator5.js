//生成器和promise结合
function ajax(url) {
    return new Promise(function (resolve, rejected) {
        setTimeout(() => {
            resolve(url)
        }, 2000)
    })
}

function foo(x, y) {
    return ajax(`http://some.url.1/?x=${x}&y=${y}`)
}

function *main() {
    try {
        var text = yield foo(11, 31)
        console.log(text)
    } catch (err) {
        console.error(err)
    }
}
var it = main()
const p = it.next().value

p.then(
    function (text) {
        it.next(text)
    },
    function (err) {
        it.throw(err)
    }
)