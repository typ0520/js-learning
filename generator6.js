//生成器和多个promise结合
function ajax(url) {
    return new Promise(function (resolve, rejected) {
        setTimeout(() => {
            resolve(url)
        }, 2000)
    })
}

function login(x, y) {
    return ajax(`http://some.url.1/?username=${x}&password=${y}`)
}

function getUserInfo(username) {
    return ajax(`http://some.url.2/?username=${username}`)
}

function *main() {
    try {
        var text = yield login('tong', '123456')
        console.log(text)
        var text2 = yield getUserInfo('tong')
        console.log(text2)
    } catch (err) {
        console.error(err)
    }
}
var it = main()
const p = it.next().value

p.then(
    function (text) {
        const p2 = it.next(text).value
        p2.then(
            function (text) {
                it.next(text)                
            },
            function (err) {
                it.throw(err)
            }
        )
    },
    function (err) {
        it.throw(err)
    }
)