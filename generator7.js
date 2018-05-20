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

function run(generator, next) {
    if (!next) {
        next = generator.next()
    }
    next.value.then(
        function (value) {
            const p2 = generator.next(value)
            if (p2.done === false) {
                run(generator, p2)
            }
        },
        function (err) {
            generator.throw(err)
        }
    )
}

run(main())