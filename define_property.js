var persion = {};
Object.defineProperty(persion, 'name' ,{
	//使用for in语句是否能列出来
	enumerable: false,
	//如果为false不能从对象中删除
	configurable: false,
	value: "Nicholas",
	//是否可写
	writable: true
})

persion.name = 'hahah'
console.log(persion.name)

for (key in persion) {
	console.log(key)
}

var book = {
	_year: 2004,
	edition: 1
};

Object.defineProperty(book, "year", {
	get: function() {
		return this._year;
	},
	set: function (newValue) {
		this._year = newValue;
		this.edition += newValue - 2004
	}
})

book.year = 2005
console.log(book.edition)

var book2 = {}

Object.defineProperties(book2, {
	_year: {
		value: 2004
	},
	edition: {
		value: 1
	},

	year: {
		get: function() {
			return this._year;
		},
		set: function (newValue) {
			this._year = newValue;
			this.edition += (newValue - 2004)
		}
	}
})

book2.year = 2006
console.log(book2.edition)

const desc = Object.getOwnPropertyDescriptor(book2, 'year')
console.log(desc)

function Persion(name, age, job) {
	this.name = name;
	this.age = age
	this.job = job
	this.sayName = function () {
		console.log(`name: ${this.name}`)
	}
}
Persion.haha = function () {
	console.log('persion haha')
}
Persion.prototype.sayAge = function () {
	console.log(`age: ${this.age}`)
}
const p = new Persion('tong', 28, 'android')
console.log(p.name)
console.log(p.constructor)

Persion('tong2', 288, 'android2')
console.log(global.age)

const o = new Object()
Persion.call(o, 'tong22', 2888, 'android22')
console.log(o.name)