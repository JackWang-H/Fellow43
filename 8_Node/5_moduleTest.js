// let xx = require('./4_moduleA')//require返回的对象就是exports.add11
// let xx = require('./6_moduleB')//require返回的对象就是exports.add11

// var p1 = new xx.person('lisi', 45);
// console.log(p1);

// var p2 = new xx('wangwu', 30);
// console.log(p2);

// console.log(xx.add11(8,8));
// console.log(xx.minus(8,4));

// console.log(add(4,5));
// console.log(add(9,9));


// let http = require('./node_modules/http_request/index');

// let http = require('http_request');//这里为什么可以直接通过这种方式访问呢呢？
//是因为node_modules文件夹极为特殊,require会默认在node_modules文件夹下的文件夹中的index.js文件执行

let http = require('http_request2');//现在文件里是index11.js而不是index.js为什么又可以呢？
//是因为我们在JSON中配置了"main": "index11.js",代表默认的,创建包的命令  ：npm init -y

http.get('www.baidu.com');

http.psot('www.qq.com');
