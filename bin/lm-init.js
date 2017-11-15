#!/usr/bin/env node

console.log('hello node');

const interAsk = require('../lib/ask');
const path = require('path');
const downGit = require('../lib/downloadGit');
const userHome = require('user-home');
const gh = require('../lib/handler');
const localPath = require('../lib/local-path');

const templatePath = path.join(userHome,'Documents/lmTemplate');

const lstemp = path.join(__dirname,'../tmp/template')   // 临时work目录，最终要替换成上面的内容
const lstempp = path.join(__dirname,'../tmp/build')   // 临时work目录，最终要替换成上面的内容

const lstempout = path.join(userHome,'Documents/build')   // 临时work目录，最终要替换成上面的内容

let meta;

generate(templatePath,lstempout);

function generate(workDir, outputDir){

    downGit('github:lzqGiser/vue-npm-con',workDir).then(function(msg){

        console.log(msg)

        let metaPath = path.join(workDir,'./meta.js');

        meta = require(path.resolve(metaPath));
        console.log(meta)
        console.log('-------------')

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

            gh(answer,filter,workDir,outputDir)

        });
    })
}