'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @param {String} questions* */
function interAsk(questions) {
  // prompts对象
  return new Promise(function (resolve) {
    _inquirer2.default.prompt(questions).then(function (answer) {
      resolve(answer);
    });
  });
} /** * Created by lzq on 2017/11/6. */

exports.default = interAsk;