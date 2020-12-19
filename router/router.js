const fs = require('fs');
const path = require('path');
const url = require('url');
const mimeModel = require('../model/common.js')
function Router (req, res, staticFile) {
    let pathname = url.parse(req.url).pathname; // 处理链接上带有的参数，例如：/aa.html?aaa=s，修改为aa.html
    if (pathname === '/') { // 默认加载首页
        pathname = '/index.html'
    }
    // 获取文件的后缀名
    const extname = path.extname(pathname);
    if (pathname !== '/favicon.ico') { // 过滤请求favicon.ico
        // 文件操作获取static 下面的index.html
        fs.readFile(`${staticFile}/${pathname}`, (err, data) => {
            if (err) { /*没有这个文件返回404页面*/
                fs.readFile(`${staticFile}/404.html`, (error, errdata) => {
                    if (error) {
                        console.log(error);
                    }
                    res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
                    res.write(errdata);
                    res.end();  // 对于每一个请求服务器必须结束响应，否则客户端（浏览器）会一直等待服务器响应
                })
            } else {
                const mime = mimeModel.getFileMime(fs, extname);
                res.writeHead(200,{"Content-Type":`${mime};charset='utf-8'`}); // 设置返回头的报文,根据不同的后缀名返回不同的报文类型
                res.write(data);
                res.end();  // 对于每一个请求服务器必须结束响应，否则客户端（浏览器）会一直等待服务器响应
            }
        })
    }
};
exports.statics = Router