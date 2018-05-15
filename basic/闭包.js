function createComparionFunction(propertyName) {
    return function(object1, object2) {
        const value1 = object1[propertyName];
        const value2 = object2[propertyName];

        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
};

function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
};
const result = compare(5, 10);
const compare2 = createComparionFunction('name');
const result2 = compare2({name: 'js'}, {name: 'kotlin'});
console.log(result2);

// 如果匿名函数没有引用外层作用域的变量，[[Scopes]]不会引用对应的作用域
function getFunc() {
    return function() {
        return 'a'
    }
}

var func = getFunc()
console.log(func())

function createFunctions () {
    var result = new Array()
    for (var i = 0; i < 10; i++) {
        result[i] = function () {
            return i
        }
    }
    return result;
}

var functions = createFunctions ()
for (let i = 0; i < functions.length;i ++) {
    var func = functions[i]
    //打印出来的全是10
    console.log(func())
}

function createFunctions2 () {
    var result = new Array()
    for (var i = 0; i < 10; i++) {
        result[i] = (function (num) {
            return function () {
                return num
            }
        })(i)
    }
    return result;
}

var functions2 = createFunctions2 ()
for (let i = 0; i < functions2.length;i ++) {
    var func = functions2[i]
    //打印出来的全是10
    console.log(func())
}