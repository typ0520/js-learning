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

async function main() {
    try {
        var text = await login('tong', '123456')
        console.log(text)
        var text2 = await getUserInfo('tong')
        console.log(text2)
    } catch (err) {
        console.error(err)
    }
}

main()