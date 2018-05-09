var obj1 = {
    id: 'awesome',
    cool () {
        console.log('example1: ' + this.id)
    }
}
var id = 'not awesome'
obj1.cool()
setTimeout(obj1.cool, 100)//在浏览器中输出not awesome，nodejs环境输出undefined

var obj2 = {
    count: 0,
    cool () {
        if (this.count < 1) {
            var self = this
            setTimeout(function timer() {
                self.count++;
                console.log(self.count)
            }, 100)
        }
    }
}
obj2.cool()

var obj3 = {
    count: 0,
    cool () {
        if (this.count < 1) {
            /**
             * lambda表达式(箭头函数)在涉及this绑定时的行为和普通函数的行为完全不一致
             * 使用当前词法作用域覆盖了this本来的值
             */
            setTimeout(() => {
                this.count++;
                console.log(this.count)
            }, 100)
        }
    }
}
obj3.cool()

var obj3 = {
    count: 0,
    cool () {
        if (this.count < 1) {
            setTimeout(function timer() {
                this.count++;
                console.log(this.count)
            }.bind(this), 100)
        }
    }
}
obj3.cool()