const querystring = require('querystring')
const url = require('url');

const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
console.log(myURL)

console.log(querystring.parse('foo=bar&abc=xyz&abc=123'))

//使用;代替&
console.log(querystring.parse('foo:bar&abc:123', null, ':'))
// 返回 'foo=bar&baz=qux'
console.log(querystring.stringify({ foo: 'bar', baz: 'qux' }))
// 返回 'foo=bar;baz=qux'
console.log(querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', null))