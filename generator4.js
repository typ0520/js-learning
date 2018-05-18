(function() {
    function ajax(url, cb) {
        setTimeout(() => {
            cb(null, 'hello world')
        }, 2000)
    }
    
    function foo(x, y, cb) {
        ajax(`http://some.url.1/?x=${x}&y=${y}`, cb)
    }
    
    foo(11, 31, function(err, text) {
        if (err) {
            console.error(err)
        } else {
            console.log(text)
        }
    })
})();

(function() {
    function ajax(url, cb) {
        setTimeout(() => {
            cb(null, 'hello world')
        }, 2000)
    }
    
    function foo(x, y) {
        ajax(`http://some.url.1/?x=${x}&y=${y}`, function(err, text) {
            if (err) {
                it.throw(err)
            } else {
                it.next(text)
            }
        })
    }

    function *main() {
        try {
            var text = yield foo(11, 31)
            console.log(text)
        } catch (err) {
            console.error(err)
        }
    }
    var it = main()
    it.next()
})();
