//并行合并

function request(url) {
    return new Promise(function(resolve, reject) {
        console.log(`${url} start`)
        setTimeout(() => {
            console.log(`${url} success`)
            resolve(Math.floor(Math.random() * 100))
        }, Math.random() * 1000)
    })
}

var req1 = request('http://some.url.1/')
var req2 = request('http://some.url.2/')

Promise.all([req1, req2])
.then(function (msgs) {
    return request('http://some.url.3/')
})
.then(function (msg) {
    console.log(msg)
})