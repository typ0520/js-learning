//try catch在catch分支具有作用域
try {
    var aaaa = 'aa'
    throw new Error('sss')
} catch (err) {
}
console.log(aaaa)
console.log(err)

for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('global: ' + i)

for (let j = 0; j < 10; j++) {
    console.log(j)
}
console.log('global: ' + j)