/**
 * Created by lzq on 2017/11/13.
 */

/*
* 用来将path处理为绝对路径
* */

// import path from 'path'
const path = require('path');

function isLoaclPath (templatePath){  // 用来判断是否是本地路径
    return /^[./]|(^[a-zA-Z]:)/.test(templatePath)
}

function getTemPath(templatePath){   // 用来返回模版的实际绝对路径地址
    return path.isAbsolute(templatePath)?
        templatePath :
        path.normalize(path.join(process.cwd(),templatePath))
}

module.exports = {
    isLoaclPath,
    getTemPath

}