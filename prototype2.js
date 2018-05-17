var str = new String()
var arr = new Array()
var set = new Set()

function Persion2() {
}

Persion2.prototype = {
    constructor: Persion,
    name: 'tong',
    friends: ['hehe', 'haha']
};

var p1 = new Persion2();
var p2 = new Persion2();

p1.friends.push('xx')
console.log(p1.friends)
console.log(p2.friends)


function Persion() {
}

var friend = new Persion();

Persion.prototype = {
    constructor: Persion,
    name: 'tong',
    sayName: function () {
        console.log('name: ' + this.name)
    }
};
Persion.sayName()
var friend2 = new Persion();
friend.sayName()