var age = 28

if (typeof window == 'undefined') {
    console.log('nodejs')

    global.color = 'red'
    delete global.color
    delete global.age
    console.log(global.age)
    console.log(global.color)
} else {
    console.log('brower')

    window.color = 'red'
    delete window.color
    delete window.age

    //使用var定义的删不掉，使用window.xxx定义的可以删除
    console.log(window.age)
    console.log(window.color)
}