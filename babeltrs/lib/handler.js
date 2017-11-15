'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var _metalsmith = require('metalsmith');

var _metalsmith2 = _interopRequireDefault(_metalsmith);

var _fileter = require('./fileter.js');

var _fileter2 = _interopRequireDefault(_fileter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @param {Object} context* @param {String} templateType* @param {String} outputDir* */
function gh(data, filter, templateDir, outputDir) {
  return new Promise(function (resolve, reject) {

    // let dir = path.join(templateDir,'./template');
    // console.log(dir)
    // metalsmith()传入一个绝对路径
    (0, _metalsmith2.default)(templateDir).source('./').destination(outputDir) // ./build
    .use((0, _fileter2.default)(filter)).use(function (files, metalsmith, done) {
      // source默认值是 "./src"

      Object.keys(files).forEach(function (key) {
        // 如此就可以将所有的模版中的js、json、vue文件进行处理了
        console.log(key);
        if (/(.+\/)*(.+\.(js|json|vue))/.test(key)) {
          // template/package.json   template/config/index.js

          // console.log(key);
          var htmldata = files[key].contents.toString(); // buffer转换为字符串

          // console.log(key)

          // 注册lint块
          _handlebars2.default.registerHelper('lint', function (v1, options) {

            if (v1 === 'yar') {
              options.inverse(this); // 取消，不渲染
            } else {
              return options.fn(this); // 确认，渲染
            }
          });

          var template = _handlebars2.default.compile(htmldata);
          var html = template(data);

          files[key].contents = new Buffer(html);
        }
      });
      done();
    }).build(function (err) {
      // build process
      if (err) throw err; // error handling is required
    });
    resolve();
  });
} /** * Created by lzq on 2017/11/6. * 匹配到给定 模式 的文件 会利用handlebars模版引擎对其进行渲染，输出到给定的路径下； */

exports.default = gh;