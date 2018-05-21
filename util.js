const util = require('util')

function Base() {
    this.name = 'base'
    this.base = 1991
    this.sayHello = function () {
        console.log('Hello ' + this.name)
    }
}

Base.prototype.showName = function () {
    console.log(this.name)
}

function Sub() {
    this.name = 'sub'
}

util.inherits(Sub, Base)
const objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)

const objSub = new Sub()
objBase.showName()
console.log(objSub)


const fs = require('fs')
const stat = util.promisify(fs.stat)

async function showStat () {
    const status = await stat('.')
    console.log(`This directory is owned by ${status.uid}`)
}
showStat()