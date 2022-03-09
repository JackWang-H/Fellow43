var fs = require('fs'); //读取文件模块
fs.readFile('file.txt', 'utf-8' , function(err, data) { 
    if (err) { 
        console.error(err); 
    } else { 
        console.log(data); 
    } 
}); 
console.log('end.');
//最后是先打印  end.  还是先打印文件里的东西？
// var res = fs.readFileSync('file.txt', 'utf-8');//同步方式读文件，同步方式代表一行一行执行，支持同步方式，但是一般用上面那种更好一些

// console.log(res);