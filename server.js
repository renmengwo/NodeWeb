const http = require('http');
const Router = require('./router/router')
const port = 3000;
const hostname = 'http://39.96.60.63'
// 2.创建一个http服务对象监听用户请求的事件（req）
http.createServer((req,res) =>{
    Router.statics(req, res, 'static');
}).listen(port,function(){
    console.log(`服务器启动，请访问：${hostname}:${port}`);
});
