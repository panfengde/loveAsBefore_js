import { C } from './js_component/analyze/analyze'
import global_env from './js_component/inital_env/index.js';
import { base, _number, _string, _boolean, lambdaBase, _class, cons, list, json, _null, _undefined } from './js_component/analyze/types/index'
//import { classFrame, frame } from "./js_component/frame/index.js"
//import { is_cdr_list, is_car_list, is_list, is_json, is_frame } from "./utils/tools"
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
//------

//--------------
console.timeEnd("编译后的代码");


