# NodeWeb

## 利用Node创建web服务器访问静态资源来实现Nginx的功能

### 主要涉及到path,url,fs,http模块
1. 创建一个http服务对象监听用户请求
2. 在服务请求里面监听请求链接，通过fs模块来找到对应的文件目录下面的文件，没有该文件时返回404页面
3. 使用fs.readFile在文件目录里面找静态资源文件
4. 在设置请求头的报文类型时候，通过请求文件的后缀名来动态设置请求头的报文类型即：
~~~
 let pathname = url.parse(req.url).pathname; // 处理链接上带有的参数
 const extname = path.extname(pathname);
 const mime = mimeModel.getFileMime(fs, extname);
{"Content-Type":`${mime};charset='utf-8'`}
~~~