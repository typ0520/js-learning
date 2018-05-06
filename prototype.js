function Persion() {
}

var friend = new Persion();

Persion.prototype.sayHi = function () {
    console.log('hi');
};

friend.sayHi()
