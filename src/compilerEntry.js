var fs = require("fs");
var path = require("path");
import loveAsBeforeCompiler from './js_component/compiler.js';




let CodeArrays = [];
let targetFile = __dirname + '/compilerResult/index.js'
fs.truncateSync(targetFile, 0,)

console.log("----", targetFile)
let readyCode = `
import { C } from '../js_component/analyze/analyze'
import global_env from '../js_component/inital_env/index.js';
import { base, _number, _string, _boolean, lambdaBase, _class, cons, list, json, _null, _undefined } from '../js_component/analyze/types/index'
//import { classFrame, frame } from "../js_component/frame/index.js"
//import { is_cdr_list, is_car_list, is_list, is_json, is_frame } from "../utils/tools"
let null_list = new list();


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

console.time("编译后的代码");
`
fs.appendFileSync(targetFile, readyCode)


//编译代码
//let file = ["./labCode/compiler/index.lab"];

//"./labCode/baseTest/index.lab",
let file = [
    "./labCode/macro/macro.lab",
    "./xml2layout/parseXml/index.lab",
    './js_component/drawComponents/index.lab'
];
file.forEach((filename) => {
    let data = fs.readFileSync(path.join(__dirname, filename), 'utf-8',);
    CodeArrays.push(data);
})

loveAsBeforeCompiler(targetFile, CodeArrays);


fs.appendFileSync(targetFile, `console.timeEnd("编译后的代码");`)






