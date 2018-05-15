function object(o) {
	function F () {}
	F.prototype = o
	return new F()
}

function inheritPrototype(subType, superType) {
    var prototype = object(SuperType.prototype);
    prototype.constructor = subType
    subType.prototype = prototype
}

function SuperType (name) {
	this.name = true;
	this.colors = ['red', 'blue', 'black']
}

SuperType.prototype.sayName = function () {
	console.log('sayName: ' + this.name)
}

function SubType(name, age) {
    SuperType.call(this, name)
    
    this.age = age
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
	console.log('sayAge: ' + this.age)
}

var instance = new SubType('tong', 88)
instance.sayName()
instance.sayAge()