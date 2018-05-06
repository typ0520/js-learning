function SuperType () {
	this.propterty = true;
}

SuperType.prototype.getSuperValue = function () {
	return this.propterty;
}

function SubType() {
	this.subproperty = false
}

SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
	return this.subproperty
}

var instance = new SubType()
console.log(instance.getSuperValue())
console.log(instance.getSubValue())

//无法向超类传递参数
//超类的实例中如果有引用类型的属性会有共享的问题，由于超类的实例会成为子类型的prototype