import { compiler } from './analyze/index.js'
import parse_txt from './parse_txt/index.js';
import Parse from './parse_exp/index.js';
var fs = require("fs");


function loveAsBeforeCompiler(compilerTarget, CodeArrays) {
    CodeArrays.forEach((labCodes) => {
        //strExp_to_List 优化空间非常大
        parse_txt(labCodes).forEach((code) => {
            //console.log(code)
            //console.log(Parse.strExp_to_List(code))
            let result = `(${compiler(Parse.strExp_to_List(code))})(global_env);`;
            fs.appendFileSync(compilerTarget, result);
            //fs.appendFileSync(__dirname + "/../compilerResult/index.js", result);
        })
    })
}

export default loveAsBeforeCompiler