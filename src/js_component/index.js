import parse_txt from './parse_txt/index.js';
import Parse from './parse_exp/index.js';
import global_env from './inital_env/index.js';
import Compiler from './Compiler/index.js';

import { analyze, eval_app } from './analyze/compilerAnalyze'
import { base, _number, _string, _boolean, lambdaBase, _class, cons, list, json, _null, _undefined } from './analyze/types/index'

import { classFrame, frame } from "./frame/index.js"
import { is_cdr_list, is_car_list, is_list, is_json, is_frame } from "../utils/tools"
let null_list = new list()

console.time("编译好的代码运行时间");
//--------------
(function (env) {
    return "ok";
  })(global_env);(analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseNumber(5),analyze.parseNumber(1)]),analyze.parseOperandsApp(analyze.parseVariable("display"),[analyze.parseString("error")]),function (env) {
          (analyze.parseOperandsApp(analyze.parseVariable("display"),[analyze.parseString("error")]))(env);
          return (ok)(env);
      }))(global_env);
//--------------
console.timeEnd("编译好的代码运行时间");
function loveAsBefore(...labCodeFiles) {
    let result = "";
    labCodeFiles.forEach((labCodes) => {
        //strExp_to_List 优化空间非常大
        parse_txt(labCodes).forEach((code) => {
            result += `(${Compiler(Parse.strExp_to_List(code))})(global_env);`
        })
        return result
    })
    console.log(result)

}



export {
    loveAsBefore
}