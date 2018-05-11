function SuperType () {
	this.propterty = true;
}

SuperType.prototype.getSuperValue = function () {
	return this.propterty;
}

function SubType() {
	this.subproperty = false
}

//最好用SubType.prototype = Object.create(SuperType.prototype)
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
	return this.subproperty
}

var instance = new SubType()
console.log(instance.getSuperValue())
console.log(instance.getSubValue())

//无法向超类传递参数
//超类的实例中如果有引用类型的属性会有共享的问题，由于超类的实例会成为子类型的prototype



//对象关联风格、委托
Foo = {
	init: function(who) {
		this.me = who
	},
	identify: function () {
		return `I am ${this.me}`
	}
}

Bar = Object.create(Foo)
Bar.speak = function () {
	console.log(`Hello ${this.identify()} .`)
}

var b1 = Object.create(Bar)
b1.init('b1')
var b2 = Object.create(Bar)
b2.init('b2')

b1.speak()
b2.speak()