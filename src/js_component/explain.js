"use strict";

import parse_txt from './parse_txt/index.js';
import Parse from './parse_exp/index.js';


import { explain } from './analyze/index'

import global_env from './inital_env/index.js';







function loveAsBeforeExplain(...labCodeFiles) {
    labCodeFiles.forEach((labCodes) => {
        //strExp_to_List 优化空间非常大
        parse_txt(labCodes).forEach((code) => {
            //console.log(code)
            //console.log(Parse.strExp_to_List(code))
            let result = explain(Parse.strExp_to_List(code), global_env)
            //console.log(result)
            try {
                let _theshow = result ? (result.show || result.value) : result
                console.log(_theshow)
            } catch (e) {
                console.log(result)
            }
        })
    })
}


export default loveAsBeforeExplain;