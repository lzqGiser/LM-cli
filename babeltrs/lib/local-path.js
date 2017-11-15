'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLoaclPath(templatePath) {
    // 用来判断是否是本地路径
    return (/^[./]|(^[a-zA-Z]:)/.test(templatePath)
    );
} /**
   * Created by lzq on 2017/11/13.
   */

/*
* 用来将path处理为绝对路径
* */

function getTemPath(templatePath) {
    // 用来返回模版的实际绝对路径地址
    return _path2.default.isAbsolute(templatePath) ? templatePath : _path2.default.normalize(_path2.default.join(process.cwd(), templatePath));
}

exports.default = {
    isLoaclPath: isLoaclPath,
    getTemPath: getTemPath

};