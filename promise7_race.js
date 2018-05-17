//竞态

function request(url) {
    return new Promise(function(resolve, reject) {
        console.log(`${url} start`)
        setTimeout(() => {
            console.log(`${url} success`)
            resolve(url)
        }, Math.random() * 1000)
    })
}

var req1 = request('http://some.url.1/')
var req2 = request('http://some.url.2/')
var req3 = request('http://some.url.3/')

Promise.race([req1, req2, req3])
.then(function (msg) {
    console.log(`then ${msg}`)
})