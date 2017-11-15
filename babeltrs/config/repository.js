'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var devConfig = {
  'repository': '自己定义仓库地址',
  'dirPath': _path2.default.join(__dirname, 'testPath')
}; /** * Created by lzq on 2017/11/6. */

exports.default = devConfig;