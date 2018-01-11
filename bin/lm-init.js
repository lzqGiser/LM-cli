#!/usr/bin/env node

const interAsk = require('../lib/ask');
const path = require('path');
const downGit = require('../lib/downloadGit');
const userHome = require('user-home');
const gh = require('../lib/handler');
const localPath = require('../lib/local-path');

const templatePath = path.join(userHome,'.lmTemplate');
const lstempout = path.join(process.cwd(), '/lmTemplate');

console.log(`当前工作的路径为：${templatePath}`);
console.log(`当前输出的路径为：${lstempout}`);

if(localPath.isLoaclPath(templatePath)){
    generate(templatePath,lstempout);
}

/*
* @param {String} workDir  工作目录，用来存放临时文件
* @param {String} outputDir 输出目录
* */

function generate(workDir, outputDir){
    downGit('github:lzqGiser/vue-npm-con',workDir).then(function(msg){
        console.log(msg);
        let meta;
        let metaPath = path.join(workDir,'./meta.js');

        meta = require(path.resolve(metaPath));

        let questions = meta.questions;
        let filter = meta.filter;

        interAsk(questions).then(function(answer){
            console.log(answer)

            for(let key in answer){
                for(let file in filter){
                    if(key === filter[file] ){
                        filter[file] = answer[key]
                    }
                }
            }
            gh(answer,filter,workDir,outputDir).then(function(result){
                console.log(`--------------------------------`);
                console.log(`lm-cli build project ${result}`);
            })
        });
    })
}