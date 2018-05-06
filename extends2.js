function ClassA(color) {
	this.color = color;
	this.sayColor = function() {
		console.log('this.color: ' + this.color)
	}
}

function ClassB(color, sName) {
	this.newMethod = ClassA;
	this.newMethod(color)
	delete this.newMethod

	this.name = sName;
    this.sayName = function () {
        console.log(this.name);
    };
}

var objA = new ClassA("blue");
var objB = new ClassB("red", "John");
objA.sayColor();	//输出 "blue"
objB.sayColor();	//输出 "red"
objB.sayName();		//输出 "John"