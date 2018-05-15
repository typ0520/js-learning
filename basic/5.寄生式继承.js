(function(){
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
})()

function Vehicle() {
    this.engines = 1
}
Vehicle.prototype.drive = function () {
    console.log("Turning on my engine.")
}

function Car() {
    var car = new Vehicle()
    car.wheels = 4

    var vehDrive = car.drive
    car.drive = function() {
        vehDrive.call(this)
        console.log("Rolling on all")
    }
    return car
}

var car = new Car()
car.drive()
