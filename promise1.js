const fetchX = new Promise(function (resolve, reject) {
    console.log('fetchX')
    resolve(3)           
})

const fetchY = new Promise(function (resolve, reject) {
    console.log('fetchY')
    resolve(5)
})

function add(xPromise, yPromise) {
    return Promise.all([xPromise, yPromise])
        .then(function (values) {
            console.log('add')
            return values[0] + values[1]
        })
}
console.log('before add')
add(fetchX, fetchY).then(
    function (sum) {
        console.log(sum)
    },
    function (err) {
        console.log(err)
    }
)
console.log('after add')