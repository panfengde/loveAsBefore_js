"use strict";

import parse_txt from './parse_txt/index.js';
import Parse from './parse_exp/index.js';
import global_env from './inital_env/index.js';
import { compilerAnalyze } from './analyze/analyze'
import { explain, } from './analyze/index'

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
//--------------
console.timeEnd("ok");

function loveAsBeforeComiler(...labCodeFiles) {
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


export {
    loveAsBeforeExplain,
    loveAsBeforeComiler
}