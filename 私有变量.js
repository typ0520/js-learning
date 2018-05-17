(function() {
    var name = ''

    Person = function(value) {
        name = value
    }
    Person.prototype.setName = function (value) {
        name = value
    }
    Person.prototype.getName = function () {
        return name
    }
})();

var person1 = new Person('js')
console.log(person1.getName())
person1.setName('haha')
console.log(person1.getName())

var person2 = new Person('sam')
//这样的写法所有的实例共享闭包里的name变量
console.log(person1.getName())
console.log(person2.getName())
