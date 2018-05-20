//递归委托

function ajax(url) {
    return new Promise(function (resolve, rejected) {
        setTimeout(() => {
            resolve(url)
        }, 2000)
    })
}

function *foo (val) {
    if (val > 1) {
        val = yield *foo(val - 1)
    }
    return yield ajax(`http://some.url.1/?v=${val}`)
}

function *bar() {
    var r1 = yield *foo(3)
    console.log(r1)
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

run(bar)