function object(o) {
	function F () {}
	F.prototype = o
	return new F()
}

const person = {
	name: 'tong',
	friends: ['Shelby', 'Court', 'Van']
}

var anotherPerson = object(person)
anotherPerson.name = '	Greg'
anotherPerson.friends.push('Rob')

var yetAnotherPerson = object(person)
yetAnotherPerson.name = ' Linda'
yetAnotherPerson.friends.push('Barbie')

console.log(yetAnotherPerson.friends)

var newPersion = Object.create(person)
newPersion.name = ' ruby'
newPersion.friends.push('python')
console.log(newPersion.friends)