'use strict';

/**

var downloadGit = require('download-git-repo'); //其实可以自己来写一个 不好用！！

/*

var downGit = function downGit(repository, tmpDir) {
  return new Promise(function (resolve, reject) {
    downloadGit(repository, tmpDir, { clone: true }, function (err) {
      err ? reject(err) : resolve('github clone success');
    });
  });
};

module.exports = downGit;