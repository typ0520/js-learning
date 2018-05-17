//解决回调未调用
function timeoutPromise(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Timeout!')
        }, delay)
    });
}

function foo() {
    return new Promise(function (resolve, reject) {

    });
}

Promise.race([
    foo(),
    timeoutPromise(3000)
])
.then(
    function () {
        console.log('ready')
    },
    function (err) {
        console.log('err1 ' + err)
    }
)