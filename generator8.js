//生成器和多个promise结合，编写自动的执行器

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

function run(gen) {
    var args = [].slice.call(arguments, 1), it
    it = gen.apply(this, args)

    return Promise.resolve()
        .then(function handleNext(value) {
            var next = it.next(value)

            return (function handleResult (next) {
                if (next.done) {
                    return next.value
                }
                else {
                    return Promise.resolve(next.value)
                    .then(
                        handleNext,
                        function handleErr (err) {
                            return Promise.resolve(it.throw(err))
                                .then(handleResult)
                        }
                    )
                }
            })(next);
        })
}

run(main)