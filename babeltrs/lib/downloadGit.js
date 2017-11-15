'use strict';

/** * Created by lzq on 2017/11/6. */

var downloadGit = require('download-git-repo'); //其实可以自己来写一个 不好用！！

/** @param {String} repository;* @param {String} tmpDir* */

var downGit = function downGit(repository, tmpDir) {
  return new Promise(function (resolve, reject) {
    downloadGit(repository, tmpDir, { clone: true }, function (err) {
      err ? reject(err) : resolve('github clone success');
    });
  });
};

module.exports = downGit;