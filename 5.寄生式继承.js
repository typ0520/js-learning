function object(o) {
	function F () {}
	F.prototype = o
	return new F()
}

const person = {
	name: 'tong',
	friends: ['Shelby', 'Court', 'Van']
}

function createAnother(original) {
    var clone = object(original);
    clone.sayHi = function() {
        console.log('hi');
    }
    return clone;
}

var anotherPerson = createAnother(person)
anotherPerson.sayHi()