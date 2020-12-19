
function getFileMime (fs, extname) { /*获取文件后缀名设置返回头的豹纹的类型*/
    /*switch (extname) {
        case '.html' :
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/plain';
    }*/
    // 此处会出现异步问题，导致return返回的是undfined，使用readFileSync来处理
    /* fs.readFile('./json/mime.json', (err, data) => {
        if (err) {
            console.log('文件不存在');
            return false;
        }
        const MimeData = JSON.parse(data.toString());
        return MimeData[extname] || 'text/plain'
    }) */

    const Mimes = fs.readFileSync('./json/mime.json');
    const MimeData = JSON.parse(Mimes.toString());
    return MimeData[extname] || 'text/plain'
}

module.exports = {
    getFileMime
}