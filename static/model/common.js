function getFileMime (extname) { /*获取文件后缀名设置返回头的豹纹的类型*/
    switch (extname) {
        case '.html' :
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/plain';
    }
}

module.exports = {
    getFileMime
}