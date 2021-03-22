"use strict";

import parse_txt from './parse_txt/index.js';
import Parse from './parse_exp/index.js';
import global_env from './inital_env/index.js';
import Compiler from './Compiler/index.js';

import { analyze, eval_app } from './analyze/analyze'
import { base, _number, _string, _boolean, lambdaBase, _class, cons, list, json, _null, _undefined } from './analyze/types/index'

import { classFrame, frame } from "./frame/index.js"
import { is_cdr_list, is_car_list, is_list, is_json, is_frame } from "../utils/tools"
let null_list = new list()

console.time("js-fib");
function fib(n) {
    if (n == 0) {

    } else if (n == 1) {

    } else {
        return ((fib(n - 1)) + (fib(n - 2)))
    }
}
fib(15)
console.timeEnd("js-fib");
console.time("ok");
//--------------
 (analyze.parseLambdaDefine("fib", analyze.parseLambda(function (env) {
    let macro = analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="), [analyze.parseVariable("n"), analyze.parseNumber(0)]), analyze.parseNumber(0), function (env) {
        let macro = analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="), [analyze.parseVariable("n"), analyze.parseNumber(1)]), analyze.parseNumber(1), function (env) {
            let macro = analyze.parseIf(analyze.parseBboolean(true), analyze.parseOperandsApp(analyze.parseVariable("+"), [analyze.parseOperandsApp(analyze.parseVariable("fib"), [analyze.parseOperandsApp(analyze.parseVariable("-"), [analyze.parseVariable("n"), analyze.parseNumber(1)])]), analyze.parseOperandsApp(analyze.parseVariable("fib"), [analyze.parseOperandsApp(analyze.parseVariable("-"), [analyze.parseVariable("n"), analyze.parseNumber(2)])])]), analyze.parseBboolean(false));
            return macro(env)
        });
        return macro(env)
    });
    return macro(env)
}, ["n"])))(global_env); 
(analyze.parseOperandsApp(analyze.parseVariable("fib"), [analyze.parseNumber(15)]))(global_env);
//--------------
console.timeEnd("ok");
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