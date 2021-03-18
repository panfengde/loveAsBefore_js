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
    return "ok"
})(global_env);(analyze.parseClass("animal",["color_1","wheel_1"],function (env) {
    (function (env) {
    (analyze.parseListSet(analyze.parseGetArr(analyze.parseVariable("this"),analyze.parseString("color")),analyze.parseVariable("color_1")))(env);
    return (analyze.parseListSet(analyze.parseGetArr(analyze.parseVariable("this"),analyze.parseString("wheel")),analyze.parseVariable("wheel_1")))(env);
})(env);
    return (analyze.parseVariable("this"))(env);
},analyze.parseLambdaDefine("a",analyze.parseLambda(analyze.parseOperandsApp(analyze.parseVariable("display"),[analyze.parseGetArr(analyze.parseVariable("this"),analyze.parseString("color")),analyze.parseVariable("x"),analyze.parseString("okokokokok??????????")]),["x"]))))(global_env);(analyze.parseValueDefine("one",analyze.parseNew(analyze.parseOperandsApp(analyze.parseVariable("animal"),[analyze.parseString("aaa"),analyze.parseNumber(11111)]))))(global_env);(analyze.parseOperandsApp(analyze.parseVariable("display"),[analyze.parseGetArr(analyze.parseVariable("one"),analyze.parseString("color"))]))(global_env);(analyze.parseOperandsApp(analyze.parseVariable("display"),[analyze.parseGetArr(analyze.parseVariable("one"),analyze.parseString("wheel"))]))(global_env);(analyze.parseListSet(analyze.parseGetArr(analyze.parseVariable("one"),analyze.parseString("color")),analyze.parseString("?????")))(global_env);(analyze.parseOperandsApp(analyze.parseVariable("display"),[analyze.parseGetArr(analyze.parseVariable("one"),analyze.parseString("color"))]))(global_env);(analyze.parseOperandsApp(analyze.parseVariable("display"),[analyze.parseGetArr(analyze.parseVariable("one"),analyze.parseString("wheel"))]))(global_env);

//--------------
console.timeEnd("编译好的代码运行时间");
function loveAsBefore(...labCodeFiles) {
    let result = "";
    labCodeFiles.forEach((labCodes) => {
        //strExp_to_List 优化空间非常大
        parse_txt(labCodes).forEach((code) => {
            //console.log(code)
            //console.log(Parse.strExp_to_List(code))
            result += `(${Compiler(Parse.strExp_to_List(code))})(global_env);`
        })
        return result
    })
    console.log(result)

}



export {
    loveAsBefore
}