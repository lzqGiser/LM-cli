#!/usr/bin/env node
'use strict';

// generate(lstemp,lstempp);

// 稍后 templatePath 应该替换掉 tmp
var generate = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(workDir, outputDir) {
    var msgg, msg, questions, filter, answer, ghMsg;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _downloadGit2.default)('github:lzqGiser/vue-npm-con', workDir);

          case 2:
            msgg = _context.sent;

            console.log(msgg);

            msg = true;

            console.log(workDir + '/meta');
            console.log('----------');

            msg ? meta = require(workDir + '/meta') : meta = null;

            // meta = require(workDir+'/meta.js')

            console.log(meta);
            console.log('----------');
            questions = meta.questions;
            filter = meta.filter;
            _context.next = 14;
            return (0, _ask2.default)(meta.questions);

          case 14:
            answer = _context.sent;

            console.log(answer);

            Object.keys(answer).forEach(function (key) {
              Object.keys(filter).forEach(function (file) {
                if (key === filter[file]) {
                  filter[file] = answer[key];
                }
              });
            });
            console.log(answer);
            console.log(filter);

            _context.next = 21;
            return (0, _handler2.default)(answer, filter, workDir, outputDir);

          case 21:
            ghMsg = _context.sent;

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function generate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _ask = require('../lib/ask');

var _ask2 = _interopRequireDefault(_ask);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _downloadGit = require('../lib/downloadGit');

var _downloadGit2 = _interopRequireDefault(_downloadGit);

var _repository = require('../config/repository');

var _repository2 = _interopRequireDefault(_repository);

var _userHome = require('user-home');

var _userHome2 = _interopRequireDefault(_userHome);

var _handler = require('../lib/handler');

var _handler2 = _interopRequireDefault(_handler);

var _localPath = require('../lib/local-path');

var _localPath2 = _interopRequireDefault(_localPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var templatePath = _path2.default.join(_userHome2.default, 'Documents/lmTemplate');

var lstemp = _path2.default.join(__dirname, '../tmp/template'); // 临时work目录，最终要替换成上面的内容
var lstempp = _path2.default.join(__dirname, '../tmp/build'); // 临时work目录，最终要替换成上面的内容

var lstempout = _path2.default.join(_userHome2.default, 'Documents/build'); // 临时work目录，最终要替换成上面的内容

console.log(_localPath2.default.isLoaclPath(templatePath));
console.log(_localPath2.default.getTemPath(lstemp));
console.log(templatePath);
console.log('---------------');

var destinationDir = _path2.default.join(__dirname);
var meta = void 0;
// console.log(lstemp);

generate(templatePath, lstempout);