//隐式混入

function SuperType (name) {
	this.name = true;

	this.colors = ['red', 'blue', 'black']
}

SuperType.prototype.getSuperValue = function () {
	return this.propterty;
}

function SubType() {
	this.subproperty = false

	SuperType.call(this)
}

SubType.prototype.getSubValue = function () {
	return this.subproperty
}

var instance = new SubType()
instance.colors.push('haha')
console.log(instance.color)

//好处
//可以实现向超类传递参数

//坏处
//超类型的原型中定义的方法，对子类型的实例是不可见的