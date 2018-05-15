//给目录下的所有文件加序号

const fs = require('fs');
const path = require('path');

function scanDir(dirPath){
    fs.readdir(dirPath,function(err, files){
        if (err) {
            console.warn(err)
        } else {
            scanFiles(dirPath, files)
        }
    });
}

function scanFiles(dirPath, files) {
    files.forEach(function(filename){
        var filedir = path.join(dirPath,filename);
        fs.stat(filedir,function(eror, stats){
            if (eror) {
                console.warn('获取文件stats失败');
            } else {
                var isFile = stats.isFile();
                if (isFile) {
                    handleFile(dirPath, filename)
                }
            }
        })
    });
}

let index = 1
function handleFile(dirPath, filename) {
    console.log(dirPath + " - " + filename);
    let newFilename = `${index}${filename}`
    if (index < 10) {
        newFilename = `0${newFilename}`
    }
    index++
    fs.rename(path.join(dirPath, filename), path.join(dirPath, newFilename), (err) => {
        if (err) throw err;
        console.log(`重命名完成 ${filename} => ${newFilename}`);
    });
}

//scanDir('/Users/tong/Desktop/doc')
var arguments = process.argv.slice(2);
if (arguments && arguments.length >= 1) {
    scanDir(arguments[0])
} else {
    console.log("请在node rename_files 后输入需要扫描的路径")
}