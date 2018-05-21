const fs = require('fs')

const data = fs.readFileSync('/Users/tong/Desktop/input.txt')
console.log(data)
console.log('length: ' + data.length)
console.log(data.lastIndexOf('is'))
console.log(data.toString())
console.log(data.toString('base64'))