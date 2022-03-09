var http = require('http'); 
http.createServer(function(req, res) { //function 是回调函数,req=reqest(请求),res=response(响应)
    res.writeHead(200, {'Content-Type': 'text/html'}); //状态码200代表一切正常
    res.write('<h1>Node.js</h1>'); 
    res.end('<p>Hello World</p>'); 
}).listen(3000); 
console.log("HTTP server is listening at port 3000.");