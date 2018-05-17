//链式调用

var p = Promise.resolve(21)
p.then(function(v) {
    console.log(v)
    return v * 2
}).then(function(v) {
    console.log(v)
})

function delay(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, time)
    })
}

delay(100)
.then(function STEP2() {
    console.log('step 2 (after 100ms)')
    return delay(200)
})
.then(function STEP3() {
    console.log('step 3 (after another 200ms)')
})
.then(function STEP4() {
    console.log('step 4 (next job)')
    return delay(50)
})
.then(function STEP5() {
    console.log('step 5 (after another 50ms)')
})