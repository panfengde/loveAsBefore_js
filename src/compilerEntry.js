var fs = require("fs");
var path = require("path");

import parse_txt from './js_component/parse_txt/index.js';
import Parse from './js_component/parse_exp/index.js';
import global_env from './js_component/inital_env/index.js';
import Compiler from './js_component/Compiler/index.js';
import { analyze, eval_app } from './js_component/analyze/compilerAnalyze'
import { base, _number, _string, _boolean, lambdaBase, _class, cons, list, json, _null, _undefined } from './js_component/analyze/types/index'

import { classFrame, frame } from "./js_component/frame/index.js"
import { is_cdr_list, is_car_list, is_list, is_json, is_frame } from "./utils/tools"
//import compilertxt from './labCode/compiler/index.lab'
let compilertxt = `(+ 1 1)`
let null_list = new list()

function loveAsBefore(...labCodeFiles) {
    labCodeFiles.forEach((labCodes) => {
        //strExp_to_List 优化空间非常大
        parse_txt(labCodes).forEach((code) => {
            //console.log(code)
            //console.log(Parse.strExp_to_List(code))
            let result = `(${Compiler(Parse.strExp_to_List(code))})(global_env);`
            fs.appendFileSync(__dirname + "/../compilerResult/index.js", result);
        })
    })

}
//let file = ["./labCode/compiler/index.lab"];
let file = [
    "./labCode/macro/macro.lab",
    "./xml2layout/parseXml/index.lab",
];
let txt = [];

fs.truncateSync(__dirname + "/../compilerResult/index.js", 0,)

file.forEach((filename) => {
    let data = fs.readFileSync(path.join(__dirname, filename), 'utf-8',);
    txt.push(data);
})
loveAsBefore(...txt)






