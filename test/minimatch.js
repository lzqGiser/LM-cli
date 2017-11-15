#!/usr/bin/env node

const matchFile = require('minimatch');
const userHome = require('user-home');
const path = require('path');
const downGit = require('../lib/downloadGit')
const interAsk = require('../lib/ask');

// const templatePath = path.join(userHome,'Documents/.lmTemplate');

const tmp = path.join(userHome, 'Documents/.vue-templates11');
// let msgg = downGit('github:lzqGiser/vue-npm-con',tmp);
console.log(tmp)

console.log(matchFile('template/scripts/publish/latest.js', '*/scripts/*/*.js'))

// console.log(require(templatePath+'/meta'))
