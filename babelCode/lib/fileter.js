/**
 * Created by lzq on 2017/11/13.
 */

import matchFile from 'minimatch';
/*
* @param {String} pattern
* @param
* */

export default (filter)=>{
    return (files, metalsmith, done) =>{

        Object.keys(filter).forEach((key)=>{
            if(filter[key]){
                Object.keys(files).forEach((file)=>{
                    // console.log(matchFile(file, key))
                    if(matchFile(file, key)){
                        delete files[file];
                    }
                })
            }
        });
        done();
    }
}
