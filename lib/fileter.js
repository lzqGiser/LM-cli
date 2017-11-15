/**
 * Created by lzq on 2017/11/13.
 */

// import matchFile from 'minimatch';
const matchFile = require('minimatch');
/*
* @param {String} pattern
* @param
* */

module.exports = function (filter){
    return function (files, metalsmith, done){

        for(let key in filter){
            if(filter[key]){
                Object.keys(files).forEach((file)=>{
                    // console.log(matchFile(file, key))
                    if(matchFile(file, key)){
                        delete files[file];
                    }
                })
            }
        }

        // Object.keys(filter).forEach((key)=>{
        //     if(filter[key]){
        //         Object.keys(files).forEach((file)=>{
        //             // console.log(matchFile(file, key))
        //             if(matchFile(file, key)){
        //                 delete files[file];
        //             }
        //         })
        //     }
        // });
        done();
    }
};
