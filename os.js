const os = require('os');

console.log(os.cpus())
//以整数的形式回空闲系统内存 的字节数.
console.log(os.freemem())
//以整数的形式返回所有系统内存的字节数
console.log(os.totalmem())
//返回当前用户的home目录.
console.log(os.homedir())
//方法返回一个字符串, 表明操作系统的 默认临时文件目录.
console.log(os.tmpdir())