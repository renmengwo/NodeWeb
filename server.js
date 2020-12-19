const http = require('http');
const Router = require('./router/router')

// 2.创建一个http服务对象监听用户请求的事件（req）
http.createServer((req,res) =>{
    Router.statics(req, res, 'static');
}).listen(8080,function(){
    console.log('服务器启动，请访问：http://localhost:8080');
});
