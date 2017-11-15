'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _minimatch = require('minimatch');

var _minimatch2 = _interopRequireDefault(_minimatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* @param {String} pattern
* @param
* */

exports.default = function (filter) {
    return function (files, metalsmith, done) {

        Object.keys(filter).forEach(function (key) {
            if (filter[key]) {
                Object.keys(files).forEach(function (file) {
                    // console.log(matchFile(file, key))
                    if ((0, _minimatch2.default)(file, key)) {
                        delete files[file];
                    }
                });
            }
        });
        done();
    };
}; /**
    * Created by lzq on 2017/11/13.
    */