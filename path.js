const path = require('path')
//获取文件名
console.log(path.basename('./tools/rename_files.js'))
//提供平台特定的路径分隔符
console.log(path.delimiter)
//获取环境变量
console.log(process.env.PATH)
//获取目录名
console.log(path.dirname('path.js'))
//获取扩展名
console.log(path.extname('path.js'))

//连接目录
console.log(path.join(__dirname, 'output.txt'))

//连接目录
// 返回: '/foo/bar/baz/asdf'
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))

// 方法返回一个对象，对象的属性表示 path 的元素。 尾部文件分隔符会被忽略
// 返回:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
console.log(path.parse('/home/user/dir/file.txt'))

//方法返回从 from 到 to 的相对路径（基于当前工作目录）。 如果 from 和 to 各自解析到同一路径（调用 path.resolve()），则返回一个长度为零的字符串。
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'))

// 提供了平台特定的路径片段分隔符：

// Windows 上是 \
// POSIX 上是 /
console.log(path.sep)
console.log('foo/bar/baz'.split(path.sep))