
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
(function (env) {
          return "ok";
        })(global_env);
            (function (env) {
          return "ok";
        })(global_env);
            (function (env) {
          return "ok";
        })(global_env);
            (function (env) {
          return "ok";
        })(global_env);
            (function (env) {
          return "ok";
        })(global_env);
            (function (env) {
          return "ok";
        })(global_env);
            (function (env) {
          return "ok";
        })(global_env);
            (function (env) {
          return "ok";
        })(global_env);
            (function (env) {
          return "ok";
        })(global_env);
            (C.parseValueDefine("xml",C.parseString(" <div> loveAsBefore <div> loveAsBefore </div> </div> ")))(global_env);
            (C.parseClass("html2json",["sxml"],function (env) {
                (C.parseListSet(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("html"));
                    return macro(env)},C.parseVariable("sxml")))(env);
                (C.parseListSet(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("result"));
                    return macro(env)},C.parseOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("parse"));
                    return macro(env)}; 
                            return (macro)(env);
                        },[function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("html"));
                    return macro(env)}; 
                            return (macro)(env);
                        }])))(env);
                return (C.parseVariable("this"))(env)
            },function (env) {
                (C.parseLambdaDefine("xml2list",C.parseLambda(function (env) {
                (C.parseValueDefine("result",C.parseNoOperandsApp(C.parseVariable("list"))))(env);
                (C.parseValueDefine("oneChild",C.parseString("")))(env);
                (C.parseValueDefine("start",C.parseBboolean(false)))(env);
                (C.parseValueDefine("txtType",C.parseBboolean(false)))(env);
                (C.parseValueDefine("componentType",C.parseBboolean(false)))(env);
                (C.parseValueDefine("componentFlag",C.parseNumber(0)))(env);
                (C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("xml"),C.parseString("forEach"));
                    return macro(env)},[C.parseLambda(function (env) {
                (C.parseString("选择逻辑"))(env);
                (C.parseIf(C.parseOperandsApp(C.parseVariable("!"),[C.parseVariable("start")]),function (env) {
                (C.parseIf(function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("!="),[C.parseVariable("x"),C.parseString(" ")]),function(env){
                    let macro=function (env) {
                return (C.parseOperandsApp(C.parseVariable("!="),[C.parseVariable("x"),C.parseString("<")]))(env)
            };
                    return macro(env)},C.parseBboolean(false));
                    return macro(env)},function (env) {
                (C.parseValueSet("start",C.parseBboolean(true)))(env);
                (C.parseValueSet("txtType",C.parseBboolean(true)))(env);
                return (C.parseValueSet("componentType",C.parseBboolean(false)))(env)
            },C.parseBboolean(false)))(env);
                return (C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString("<")]),function (env) {
                (C.parseValueSet("start",C.parseBboolean(true)))(env);
                (C.parseValueSet("componentType",C.parseBboolean(true)))(env);
                return (C.parseValueSet("txtType",C.parseBboolean(false)))(env)
            },C.parseBboolean(false)))(env)
            },C.parseIf(function(env){
                    let macro=C.parseIf(C.parseVariable("txtType"),function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("!="),[C.parseVariable("oneChild"),C.parseString("")]),function(env){
                    let macro=function (env) {
                return (C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString("<")]))(env)
            };
                    return macro(env)},C.parseBboolean(false));
                    return macro(env)},C.parseBboolean(false));
                    return macro(env)},function (env) {
                (C.parseString("文字结束逻辑"))(env);
                (C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("result"),C.parseString("push"));
                    return macro(env)},[C.parseVariable("oneChild")]))(env);
                (C.parseValueSet("oneChild",C.parseString("")))(env);
                (C.parseValueSet("start",C.parseBboolean(true)))(env);
                (C.parseValueSet("componentType",C.parseBboolean(true)))(env);
                return (C.parseValueSet("txtType",C.parseBboolean(false)))(env)
            },C.parseBboolean(false))))(env);
                return (C.parseIf(C.parseVariable("start"),function(env){
                    let macro=C.parseIf(C.parseVariable("componentType"),function (env) {
                return (function (env) {
                (function(env){
                    let macro=function (env) {
                (C.parseValueSet("oneChild",C.parseOperandsApp(C.parseVariable("+"),[C.parseVariable("oneChild"),C.parseVariable("x")])))(env);
                return (C.parseVariable("oneChild"))(env)
            };
                    return macro(env)})(env);
                (function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString("<")]),function (env) {
                return (function(env){
                    let macro=function (env) {
                (C.parseValueSet("componentFlag",C.parseOperandsApp(C.parseVariable("+"),[C.parseVariable("componentFlag"),C.parseNumber(1)])))(env);
                return (C.parseVariable("componentFlag"))(env)
            };
                    return macro(env)})(env)
            },function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString("/")]),function (env) {
                return (function(env){
                    let macro=function (env) {
                (C.parseValueSet("componentFlag",C.parseOperandsApp(C.parseVariable("-"),[C.parseVariable("componentFlag"),C.parseNumber(2)])))(env);
                return (C.parseVariable("componentFlag"))(env)
            };
                    return macro(env)})(env)
            },C.parseBboolean(false));
                    return macro(env)});
                    return macro(env)})(env);
                return (C.parseIf(function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("componentFlag"),C.parseNumber(0)]),function(env){
                    let macro=function (env) {
                return (C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString(">")]))(env)
            };
                    return macro(env)},C.parseBboolean(false));
                    return macro(env)},function (env) {
                (C.parseOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("result"),C.parseString("push"));
                    return macro(env)}; 
                            return (macro)(env);
                        },[C.parseVariable("oneChild")]))(env);
                (C.parseValueSet("oneChild",C.parseString("")))(env);
                (C.parseValueSet("start",C.parseBboolean(false)))(env);
                (C.parseValueSet("txtType",C.parseBboolean(false)))(env);
                (C.parseValueSet("componentType",C.parseBboolean(false)))(env);
                return (C.parseValueSet("componentFlag",C.parseNumber(0)))(env)
            },C.parseBboolean(false)))(env)
            })(env)
            },function(env){
                    let macro=C.parseIf(C.parseVariable("txtType"),function (env) {
                return (function (env) {
                (C.parseString("文字逻辑"))(env);
                return (function(env){
                            let macro=function(env){
                    let macro=function (env) {
                (C.parseValueSet("oneChild",C.parseOperandsApp(C.parseVariable("+"),[C.parseVariable("oneChild"),C.parseVariable("x")])))(env);
                return (C.parseVariable("oneChild"))(env)
            };
                    return macro(env)}; 
                            return (macro)(env);
                        })(env)
            })(env)
            },C.parseBboolean(false));
                    return macro(env)});
                    return macro(env)},C.parseBboolean(false)))(env)
            },["x"])]))(env);
                return (C.parseVariable("result"))(env)
            },["xml"])))(env);
                (C.parseLambdaDefine("parseComponents",C.parseLambda(function (env) {
                (C.parseValueDefine("tagResult",C.parseString("")))(env);
                (C.parseValueDefine("_start",C.parseBboolean(false)))(env);
                (C.parseValueDefine("_tagInfoEnd",C.parseBboolean(false)))(env);
                (C.parseValueDefine("_childFlag",C.parseNumber(1)))(env);
                (C.parseValueDefine("_getChild",C.parseString("")))(env);
                (C.parseValueDefine("childResult",C.parseString("")))(env);
                (C.parseValueDefine("componentResult",C.parseVariable("null")))(env);
                (C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("xml"),C.parseString("index"));
                    return macro(env)},[C.parseNumber(0)]),C.parseString("<")]),function (env) {
                (C.parseOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("xml"),C.parseString("forEach"));
                    return macro(env)}; 
                            return (macro)(env);
                        },[C.parseLambda(function (env) {
                return (C.parseIf(C.parseOperandsApp(C.parseVariable("!"),[C.parseVariable("_tagInfoEnd")]),function (env) {
                (C.parseIf(C.parseOperandsApp(C.parseVariable("!"),[C.parseVariable("_start")]),C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString("<")]),C.parseValueSet("_start",C.parseBboolean(true)),C.parseBboolean(false)),C.parseBboolean(false)))(env);
                return (C.parseIf(C.parseVariable("_start"),function (env) {
                (C.parseIf(function(env){
                    let macro=C.parseIf(C.parseVariable("_start"),function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("!="),[C.parseVariable("x"),C.parseString("<")]),function(env){
                    let macro=function (env) {
                return (C.parseOperandsApp(C.parseVariable("!="),[C.parseVariable("x"),C.parseString(">")]))(env)
            };
                    return macro(env)},C.parseBboolean(false));
                    return macro(env)},C.parseBboolean(false));
                    return macro(env)},function(env){
                    let macro=function (env) {
                (C.parseValueSet("tagResult",C.parseOperandsApp(C.parseVariable("+"),[C.parseVariable("tagResult"),C.parseVariable("x")])))(env);
                return (C.parseVariable("tagResult"))(env)
            };
                    return macro(env)},C.parseBboolean(false)))(env);
                return (C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString(">")]),function (env) {
                return (C.parseValueSet("_tagInfoEnd",C.parseBboolean(true)))(env)
            },C.parseBboolean(false)))(env)
            },C.parseBboolean(false)))(env)
            },C.parseIf(C.parseOperandsApp(C.parseVariable("!="),[C.parseVariable("_childFlag"),C.parseNumber(0)]),function (env) {
                (function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString("<")]),function (env) {
                return (function(env){
                    let macro=function (env) {
                (C.parseValueSet("_childFlag",C.parseOperandsApp(C.parseVariable("+"),[C.parseVariable("_childFlag"),C.parseNumber(1)])))(env);
                return (C.parseVariable("_childFlag"))(env)
            };
                    return macro(env)})(env)
            },function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString("/")]),function (env) {
                return (function(env){
                    let macro=function (env) {
                (C.parseValueSet("_childFlag",C.parseOperandsApp(C.parseVariable("-"),[C.parseVariable("_childFlag"),C.parseNumber(2)])))(env);
                return (C.parseVariable("_childFlag"))(env)
            };
                    return macro(env)})(env)
            },C.parseBboolean(false));
                    return macro(env)});
                    return macro(env)})(env);
                return (function(env){
                    let macro=function (env) {
                (C.parseValueSet("_getChild",C.parseOperandsApp(C.parseVariable("+"),[C.parseVariable("_getChild"),C.parseVariable("x")])))(env);
                return (C.parseVariable("_getChild"))(env)
            };
                    return macro(env)})(env)
            },C.parseBboolean(false))))(env)
            },["x","index"])]))(env);
                (C.parseValueDefine("__childLength",C.parseNoOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("_getChild"),C.parseString("length"));
                    return macro(env)})))(env);
                (C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("_getChild"),C.parseString("index"));
                    return macro(env)},[C.parseOperandsApp(C.parseVariable("-"),[C.parseVariable("__childLength"),C.parseNumber(1)])]),C.parseString("/")]),function (env) {
                (C.parseValueDefine("_temp",C.parseVariable("__childLength")))(env);
                (C.parseValueDefine("_temp2",C.parseVariable("__childLength")))(env);
                (function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("_temp"),C.parseVariable("_temp2")]),C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("_getChild"),C.parseString("index"));
                    return macro(env)}; 
                            return (macro)(env);
                        },[C.parseOperandsApp(C.parseVariable("-"),[C.parseVariable("__childLength"),C.parseNumber(1)])]),C.parseString("<")]),C.parseValueSet("_temp",function(env){
                    let macro=function (env) {
                (C.parseValueSet("__childLength",C.parseOperandsApp(C.parseVariable("-"),[C.parseVariable("__childLength"),C.parseNumber(1)])))(env);
                return (C.parseVariable("__childLength"))(env)
            };
                    return macro(env)}),function(env){
                            let macro=function(env){
                    let macro=function (env) {
                (C.parseValueSet("__childLength",C.parseOperandsApp(C.parseVariable("-"),[C.parseVariable("__childLength"),C.parseNumber(1)])))(env);
                return (C.parseVariable("__childLength"))(env)
            };
                    return macro(env)}; 
                            return (macro)(env);
                        }),function (env) {
                (C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("_getChild"),C.parseString("index"));
                    return macro(env)}; 
                            return (macro)(env);
                        },[C.parseOperandsApp(C.parseVariable("-"),[C.parseVariable("__childLength"),C.parseNumber(1)])]),C.parseString("<")]),C.parseValueSet("_temp",function(env){
                            let macro=function(env){
                    let macro=function (env) {
                (C.parseValueSet("__childLength",C.parseOperandsApp(C.parseVariable("-"),[C.parseVariable("__childLength"),C.parseNumber(1)])))(env);
                return (C.parseVariable("__childLength"))(env)
            };
                    return macro(env)}; 
                            return (macro)(env);
                        }),function(env){
                            let macro=function(env){
                    let macro=function (env) {
                (C.parseValueSet("__childLength",C.parseOperandsApp(C.parseVariable("-"),[C.parseVariable("__childLength"),C.parseNumber(1)])))(env);
                return (C.parseVariable("__childLength"))(env)
            };
                    return macro(env)}; 
                            return (macro)(env);
                        }))(env);
                return (function(env){
                            return (macro)(env);
                        })(env)
            });
                    return macro(env)})(env);
                return (C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("_getChild"),C.parseString("forEach"));
                    return macro(env)},[C.parseLambda(function (env) {
                return (C.parseIf(C.parseOperandsApp(C.parseVariable("<"),[C.parseVariable("index"),C.parseOperandsApp(C.parseVariable("-"),[C.parseVariable("_temp"),C.parseNumber(1)])]),function(env){
                    let macro=function (env) {
                (C.parseValueSet("childResult",C.parseOperandsApp(C.parseVariable("+"),[C.parseVariable("childResult"),C.parseVariable("x")])))(env);
                return (C.parseVariable("childResult"))(env)
            };
                    return macro(env)},C.parseBboolean(false)))(env)
            },["x","index"])]))(env)
            },C.parseBboolean(false)))(env);
                (C.parseValueSet("componentResult",C.parseOperandsApp(C.parseVariable("parseTag"),[C.parseVariable("tagResult")])))(env);
                return (C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("componentResult"),C.parseString("insert"));
                    return macro(env)},[function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("child"),C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("parse"));
                    return macro(env)},[C.parseVariable("childResult")])]);
                    return macro(env)}]))(env)
            },function (env) {
                (C.parseValueDefine("temp",C.parseNoOperandsApp(C.parseVariable("json"))))(env);
                (C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("temp"),C.parseString("insert"));
                    return macro(env)},[function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("tag"),C.parseString("txt")]);
                    return macro(env)}]))(env);
                (C.parseOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("temp"),C.parseString("insert"));
                    return macro(env)}; 
                            return (macro)(env);
                        },[function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("txt"),C.parseVariable("xml")]);
                    return macro(env)}]))(env);
                return (C.parseValueSet("componentResult",C.parseVariable("temp")))(env)
            }))(env);
                return (C.parseVariable("componentResult"))(env)
            },["xml"])))(env);
                (C.parseLambdaDefine("parseTag",C.parseLambda(function (env) {
                (C.parseValueDefine("tag",C.parseString("")))(env);
                (C.parseValueDefine("tagEnd",C.parseBboolean(false)))(env);
                (C.parseValueDefine("child",C.parseBboolean(false)))(env);
                (C.parseValueDefine("arrInfo",C.parseNoOperandsApp(C.parseVariable("json"))))(env);
                (C.parseValueDefine("arrName",C.parseString("")))(env);
                (C.parseValueDefine("arrNamestart",C.parseBboolean(false)))(env);
                (C.parseValueDefine("arrNameEnd",C.parseBboolean(false)))(env);
                (C.parseValueDefine("arrValue",C.parseString("")))(env);
                (C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("tagIngo"),C.parseString("forEach"));
                    return macro(env)},[C.parseLambda(function (env) {
                return (C.parseIf(C.parseVariable("tagEnd"),function (env) {
                (C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString("=")]),C.parseValueSet("arrNameEnd",C.parseBboolean(true)),C.parseBboolean(false)))(env);
                (C.parseIf(function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("!="),[C.parseVariable("x"),C.parseString(" ")]),function(env){
                    let macro=function (env) {
                return (C.parseOperandsApp(C.parseVariable("!="),[C.parseVariable("x"),C.parseString("=")]))(env)
            };
                    return macro(env)},C.parseBboolean(false));
                    return macro(env)},C.parseIf(C.parseVariable("arrNameEnd"),function(env){
                    let macro=function (env) {
                (C.parseValueSet("arrValue",C.parseOperandsApp(C.parseVariable("+"),[C.parseVariable("arrValue"),C.parseVariable("x")])))(env);
                return (C.parseVariable("arrValue"))(env)
            };
                    return macro(env)},function(env){
                    let macro=function (env) {
                (C.parseValueSet("arrName",C.parseOperandsApp(C.parseVariable("+"),[C.parseVariable("arrName"),C.parseVariable("x")])))(env);
                return (C.parseVariable("arrName"))(env)
            };
                    return macro(env)}),C.parseBboolean(false)))(env);
                return (C.parseIf(function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString(" ")]),function(env){
                    let macro=function (env) {
                return (C.parseVariable("arrNameEnd"))(env)
            };
                    return macro(env)},C.parseBboolean(false));
                    return macro(env)},function (env) {
                (C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("arrInfo"),C.parseString("insert"));
                    return macro(env)},[function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseVariable("arrName"),C.parseVariable("arrValue")]);
                    return macro(env)}]))(env);
                (C.parseValueSet("arrName",C.parseString("")))(env);
                (C.parseValueSet("arrNamestart",C.parseBboolean(false)))(env);
                (C.parseValueSet("arrNameEnd",C.parseBboolean(false)))(env);
                return (C.parseValueSet("arrValue",C.parseString("")))(env)
            },C.parseBboolean(false)))(env)
            },C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("x"),C.parseString(" ")]),C.parseIf(C.parseOperandsApp(C.parseVariable("!="),[C.parseVariable("tag"),C.parseString("")]),C.parseValueSet("tagEnd",C.parseBboolean(true)),C.parseBboolean(false)),function(env){
                    let macro=function (env) {
                (C.parseValueSet("tag",C.parseOperandsApp(C.parseVariable("+"),[C.parseVariable("tag"),C.parseVariable("x")])))(env);
                return (C.parseVariable("tag"))(env)
            };
                    return macro(env)})))(env)
            },["x"])]))(env);
                (C.parseString("这里是上面未添加的属性，最后处理一下"))(env);
                (C.parseIf(C.parseOperandsApp(C.parseVariable("!="),[C.parseVariable("arrValue"),C.parseString("")]),C.parseOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("arrInfo"),C.parseString("insert"));
                    return macro(env)}; 
                            return (macro)(env);
                        },[function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseVariable("arrName"),C.parseVariable("arrValue")]);
                    return macro(env)}; 
                            return (macro)(env);
                        }]),C.parseBboolean(false)))(env);
                (C.parseOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("arrInfo"),C.parseString("insert"));
                    return macro(env)}; 
                            return (macro)(env);
                        },[function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("tag"),C.parseVariable("tag")]);
                    return macro(env)}]))(env);
                return (C.parseVariable("arrInfo"))(env)
            },["tagIngo"])))(env);
                return (C.parseLambdaDefine("parse",C.parseLambda(function (env) {
                (C.parseValueDefine("result",C.parseNoOperandsApp(C.parseVariable("list"))))(env);
                (C.parseLet(C.parseOperandsApp(C.parseLambda(function (env) {
                return (C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("components"),C.parseString("forEach"));
                    return macro(env)},[C.parseLambda(function (env) {
                return (C.parseOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("result"),C.parseString("push"));
                    return macro(env)}; 
                            return (macro)(env);
                        },[C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("parseComponents"));
                    return macro(env)},[C.parseVariable("oneComonents")])]))(env)
            },["oneComonents"])]))(env)
            },["components"]),[C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("xml2list"));
                    return macro(env)},[C.parseVariable("xml")])])))(env);
                return (C.parseVariable("result"))(env)
            },["xml"])))(env)
            }))(global_env);
            (C.parseValueDefine("body",C.parseNew(C.parseOperandsApp(C.parseVariable("html2json"),[C.parseVariable("xml")]))))(global_env);
            (C.parseClass("BlockLevel",["xa"],function (env) {
                (C.parseListSet(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("elementInfo"));
                    return macro(env)},C.parseOperandsApp(C.parseVariable("json"),[function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("w"),C.parseNumber(0)]);
                    return macro(env)},function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("h"),C.parseNumber(0)]);
                    return macro(env)}])))(env);
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("child"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseNoOperandsApp(C.parseVariable("null"))))(env);
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("father"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseNoOperandsApp(C.parseVariable("null"))))(env);
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("bigBrother"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseNoOperandsApp(C.parseVariable("null"))))(env);
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("brother"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseNoOperandsApp(C.parseVariable("null"))))(env);
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("layoutInfo"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseOperandsApp(C.parseVariable("json"),[function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("x"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("y"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endx"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endy"),function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("elementInfo")),C.parseString("h"));
                    return macro(env)}; 
                            return (macro)(env);
                        }]);
                    return macro(env)}])))(env);
                return (C.parseVariable("this"))(env)
            },function (env) {
                (C.parseLambdaDefine("CountLayoutInfo",C.parseLambda(function (env) {
                (C.parseValueDefine("fatherLayoutInfo",C.parseVariable("null")))(env);
                (C.parseValueDefine("bigBrotherLayoutInfo",C.parseVariable("null")))(env);
                (C.parseIf(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("father"));
                    return macro(env)},C.parseValueSet("fatherLayoutInfo",function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("father")),C.parseString("layoutInfo"));
                    return macro(env)}),C.parseValueSet("fatherLayoutInfo",C.parseOperandsApp(C.parseVariable("json"),[function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("x"),C.parseNumber(0)]);
                    return macro(env)},function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("y"),C.parseNumber(0)]);
                    return macro(env)},function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endx"),C.parseNumber(0)]);
                    return macro(env)},function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endy"),C.parseNumber(0)]);
                    return macro(env)}]))))(env);
                (C.parseIf(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("bigBrother"));
                    return macro(env)},C.parseValueSet("bigBrotherLayoutInfo",function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("bigBrother")),C.parseString("layoutInfo"));
                    return macro(env)}),C.parseValueSet("bigBrotherLayoutInfo",C.parseOperandsApp(C.parseVariable("json"),[function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("x"),function(env){
                    let macro=C.parseGetArr(C.parseVariable("fatherLayoutInfo"),C.parseString("endx"));
                    return macro(env)}]);
                    return macro(env)},function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("y"),function(env){
                    let macro=C.parseGetArr(C.parseVariable("fatherLayoutInfo"),C.parseString("y"));
                    return macro(env)}]);
                    return macro(env)},function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endx"),function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("fatherLayoutInfo"),C.parseString("endx"));
                    return macro(env)}; 
                            return (macro)(env);
                        }]);
                    return macro(env)},function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endy"),function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("fatherLayoutInfo"),C.parseString("y"));
                    return macro(env)}; 
                            return (macro)(env);
                        }]);
                    return macro(env)}]))))(env);
                return (C.parseListSet(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("layoutInfo"));
                    return macro(env)},C.parseOperandsApp(C.parseVariable("json"),[function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("x"),function(env){
                    let macro=C.parseGetArr(C.parseVariable("bigBrotherLayoutInfo"),C.parseString("x"));
                    return macro(env)}]);
                    return macro(env)},function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("y"),function(env){
                    let macro=C.parseGetArr(C.parseVariable("bigBrotherLayoutInfo"),C.parseString("endy"));
                    return macro(env)}]);
                    return macro(env)},function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endx"),function(env){
                    let macro=C.parseGetArr(C.parseVariable("fatherLayoutInfo"),C.parseString("x"));
                    return macro(env)}]);
                    return macro(env)},function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endy"),C.parseOperandsApp(C.parseVariable("+"),[function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("bigBrotherLayoutInfo"),C.parseString("endy"));
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("elementInfo")),C.parseString("h"));
                    return macro(env)}])]);
                    return macro(env)}])))(env)
            },["undefined"])))(env);
                (C.parseLambdaDefine("render",C.parseLambda(function (env) {
                (C.parseNoOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("CountLayoutInfo"));
                    return macro(env)}))(env);
                (C.parseNoOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("drawSelf"));
                    return macro(env)}))(env);
                (C.parseIf(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("child"));
                    return macro(env)},C.parseNoOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("child")),C.parseString("render"));
                    return macro(env)}),C.parseBboolean(false)))(env);
                return (C.parseIf(function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("brother"));
                    return macro(env)},C.parseNoOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("brother")),C.parseString("render"));
                    return macro(env)}),C.parseBboolean(false)))(env)
            },["undefined"])))(env);
                return (C.parseLambdaDefine("drawSelf",C.parseLambda(function (env) {
                return (C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("canvas"),C.parseString("rect"));
                    return macro(env)},[function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("layoutInfo")),C.parseString("x"));
                    return macro(env)},function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("layoutInfo")),C.parseString("y"));
                    return macro(env)},C.parseNumber(600),function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("elementInfo")),C.parseString("h"));
                    return macro(env)}; 
                            return (macro)(env);
                        }]))(env)
            },["undefined"])))(env)
            }))(global_env);
            (C.parseClass("txtLevel",["txt"],function (env) {
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("elementInfo"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseOperandsApp(C.parseVariable("json"),[function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("w"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("h"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        }])))(env);
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("content"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseVariable("txt")))(env);
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("child"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseNoOperandsApp(C.parseVariable("null"))))(env);
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("father"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseNoOperandsApp(C.parseVariable("null"))))(env);
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("bigBrother"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseNoOperandsApp(C.parseVariable("null"))))(env);
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("brother"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseNoOperandsApp(C.parseVariable("null"))))(env);
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("layoutInfo"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseOperandsApp(C.parseVariable("json"),[function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("x"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("y"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endx"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endy"),function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("elementInfo")),C.parseString("h"));
                    return macro(env)}; 
                            return (macro)(env);
                        }]);
                    return macro(env)}; 
                            return (macro)(env);
                        }])))(env);
                return (C.parseVariable("this"))(env)
            },function (env) {
                (C.parseLambdaDefine("CountLayoutInfo",C.parseLambda(function (env) {
                (C.parseValueDefine("fatherLayoutInfo",C.parseVariable("null")))(env);
                (C.parseValueDefine("bigBrotherLayoutInfo",C.parseVariable("null")))(env);
                (C.parseIf(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("father"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseValueSet("fatherLayoutInfo",function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("father")),C.parseString("layoutInfo"));
                    return macro(env)}; 
                            return (macro)(env);
                        }),C.parseValueSet("fatherLayoutInfo",C.parseOperandsApp(C.parseVariable("json"),[function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("x"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("y"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endx"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endy"),C.parseNumber(0)]);
                    return macro(env)}; 
                            return (macro)(env);
                        }]))))(env);
                (C.parseIf(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("bigBrother"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseValueSet("bigBrotherLayoutInfo",function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("bigBrother")),C.parseString("layoutInfo"));
                    return macro(env)}; 
                            return (macro)(env);
                        }),C.parseValueSet("bigBrotherLayoutInfo",C.parseOperandsApp(C.parseVariable("json"),[function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("x"),function(env){
                    let macro=C.parseGetArr(C.parseVariable("fatherLayoutInfo"),C.parseString("endx"));
                    return macro(env)}]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("y"),function(env){
                    let macro=C.parseGetArr(C.parseVariable("fatherLayoutInfo"),C.parseString("y"));
                    return macro(env)}]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endx"),function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("fatherLayoutInfo"),C.parseString("endx"));
                    return macro(env)}; 
                            return (macro)(env);
                        }]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endy"),function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("fatherLayoutInfo"),C.parseString("y"));
                    return macro(env)}; 
                            return (macro)(env);
                        }]);
                    return macro(env)}; 
                            return (macro)(env);
                        }]))))(env);
                return (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("layoutInfo"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseOperandsApp(C.parseVariable("json"),[function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("x"),function(env){
                    let macro=C.parseGetArr(C.parseVariable("bigBrotherLayoutInfo"),C.parseString("x"));
                    return macro(env)}]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("y"),function(env){
                    let macro=C.parseGetArr(C.parseVariable("bigBrotherLayoutInfo"),C.parseString("endy"));
                    return macro(env)}]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endx"),function(env){
                    let macro=C.parseGetArr(C.parseVariable("fatherLayoutInfo"),C.parseString("x"));
                    return macro(env)}]);
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseOperandsApp(C.parseVariable("cons"),[C.parseString("endy"),C.parseOperandsApp(C.parseVariable("+"),[function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("bigBrotherLayoutInfo"),C.parseString("endy"));
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("elementInfo")),C.parseString("h"));
                    return macro(env)}])]);
                    return macro(env)}; 
                            return (macro)(env);
                        }])))(env)
            },["undefined"])))(env);
                (C.parseLambdaDefine("render",C.parseLambda(function (env) {
                (C.parseNoOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("CountLayoutInfo"));
                    return macro(env)}; 
                            return (macro)(env);
                        }))(env);
                (C.parseNoOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("drawSelf"));
                    return macro(env)}; 
                            return (macro)(env);
                        }))(env);
                (C.parseIf(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("child"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseNoOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("child")),C.parseString("render"));
                    return macro(env)}; 
                            return (macro)(env);
                        }),C.parseBboolean(false)))(env);
                return (C.parseIf(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("brother"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseNoOperandsApp(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("brother")),C.parseString("render"));
                    return macro(env)}; 
                            return (macro)(env);
                        }),C.parseBboolean(false)))(env)
            },["undefined"])))(env);
                return (C.parseLambdaDefine("drawSelf",C.parseLambda(function (env) {
                return (C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("canvas"),C.parseString("fillText"));
                    return macro(env)},[function(env){
                    let macro=C.parseGetArr(C.parseVariable("this"),C.parseString("content"));
                    return macro(env)},function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("layoutInfo")),C.parseString("x"));
                    return macro(env)}; 
                            return (macro)(env);
                        },function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("this"),C.parseString("layoutInfo")),C.parseString("y"));
                    return macro(env)}; 
                            return (macro)(env);
                        }]))(env)
            },["undefined"])))(env)
            }))(global_env);
            (C.parseLambdaDefine("parseEleInfoTree",C.parseLambda(function (env) {
                (C.parseValueDefine("result",C.parseNoOperandsApp(C.parseVariable("null"))))(env);
                (C.parseValueDefine("temp",C.parseNoOperandsApp(C.parseVariable("null"))))(env);
                (C.parseValueDefine("_thisOne",C.parseNoOperandsApp(C.parseVariable("null"))))(env);
                (C.parseOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("eleLists"),C.parseString("forEach"));
                    return macro(env)},[C.parseLambda(function (env) {
                (C.parseValueDefine("tag",function(env){
                    let macro=C.parseGetArr(C.parseVariable("element"),C.parseString("tag"));
                    return macro(env)}))(env);
                (function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("tag"),C.parseString("div")]),function (env) {
                (C.parseValueSet("_thisOne",C.parseNew(C.parseOperandsApp(C.parseVariable("BlockLevel"),[C.parseString("1")]))))(env);
                return (C.parseListSet(function(env){
                    let macro=C.parseGetArr(C.parseVariable("_thisOne"),C.parseString("child"));
                    return macro(env)},C.parseOperandsApp(C.parseVariable("parseEleInfoTree"),[function(env){
                    let macro=C.parseGetArr(C.parseVariable("element"),C.parseString("child"));
                    return macro(env)},C.parseVariable("_thisOne")])))(env)
            },function(env){
                    let macro=C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("tag"),C.parseString("txt")]),function (env) {
                return (C.parseValueSet("_thisOne",C.parseNew(C.parseOperandsApp(C.parseVariable("txtLevel"),[function(env){
                    let macro=C.parseGetArr(C.parseVariable("element"),C.parseString("txt"));
                    return macro(env)}]))))(env)
            },C.parseBboolean(false));
                    return macro(env)});
                    return macro(env)})(env);
                (C.parseListSet(function(env){
                    let macro=C.parseGetArr(C.parseVariable("_thisOne"),C.parseString("father"));
                    return macro(env)},C.parseVariable("father")))(env);
                return (C.parseIf(C.parseOperandsApp(C.parseVariable("="),[C.parseVariable("i"),C.parseNumber(0)]),function (env) {
                (C.parseValueSet("result",C.parseVariable("_thisOne")))(env);
                return (C.parseValueSet("temp",C.parseVariable("_thisOne")))(env)
            },function (env) {
                (C.parseListSet(function(env){
                    let macro=C.parseGetArr(C.parseVariable("temp"),C.parseString("brother"));
                    return macro(env)},C.parseVariable("_thisOne")))(env);
                (C.parseListSet(function(env){
                    let macro=C.parseGetArr(C.parseVariable("_thisOne"),C.parseString("bigBrother"));
                    return macro(env)},C.parseVariable("temp")))(env);
                return (C.parseValueSet("temp",C.parseVariable("_thisOne")))(env)
            }))(env)
            },["element","i"])]))(env);
                return (C.parseVariable("result"))(env)
            },["eleLists","father"])))(global_env);
            (C.parseLambdaDefine("parseEleInfo",C.parseLambda(function (env) {
                (C.parseIf(function(env){
                    let macro=C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("child"));
                    return macro(env)},C.parseOperandsApp(C.parseVariable("parseEleInfo"),[function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("child"));
                    return macro(env)}; 
                            return (macro)(env);
                        }]),function (env) {
                (C.parseListSet(function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("elementInfo")),C.parseString("w"));
                    return macro(env)},C.parseNumber(500)))(env);
                return (C.parseListSet(function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("elementInfo")),C.parseString("h"));
                    return macro(env)},C.parseNumber(24)))(env)
            }))(env);
                (C.parseIf(function(env){
                    let macro=C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("brother"));
                    return macro(env)},C.parseOperandsApp(C.parseVariable("parseEleInfo"),[function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("brother"));
                    return macro(env)}; 
                            return (macro)(env);
                        }]),C.parseBboolean(false)))(env);
                return (C.parseIf(function(env){
                    let macro=C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("father"));
                    return macro(env)},function (env) {
                (function(env){
                    let macro=function (env) {
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("father")),C.parseString("elementInfo")),C.parseString("w"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseOperandsApp(C.parseVariable("+"),[function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("father")),C.parseString("elementInfo")),C.parseString("w"));
                    return macro(env)},function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("elementInfo")),C.parseString("w"));
                    return macro(env)}; 
                            return (macro)(env);
                        }])))(env);
                return (function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("father")),C.parseString("elementInfo")),C.parseString("w"));
                    return macro(env)}; 
                            return (macro)(env);
                        })(env)
            };
                    return macro(env)})(env);
                return (function(env){
                    let macro=function (env) {
                (C.parseListSet(function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("father")),C.parseString("elementInfo")),C.parseString("h"));
                    return macro(env)}; 
                            return (macro)(env);
                        },C.parseOperandsApp(C.parseVariable("+"),[function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("father")),C.parseString("elementInfo")),C.parseString("h"));
                    return macro(env)},function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("elementInfo")),C.parseString("h"));
                    return macro(env)}; 
                            return (macro)(env);
                        }])))(env);
                return (function(env){
                            let macro=function(env){
                    let macro=C.parseGetArr(C.parseGetArr(C.parseGetArr(C.parseVariable("elmentObj"),C.parseString("father")),C.parseString("elementInfo")),C.parseString("h"));
                    return macro(env)}; 
                            return (macro)(env);
                        })(env)
            };
                    return macro(env)})(env)
            },C.parseBboolean(false)))(env)
            },["elmentObj"])))(global_env);
            (C.parseValueDefine("elementTree",C.parseOperandsApp(C.parseVariable("parseEleInfoTree"),[function(env){
                    let macro=C.parseGetArr(C.parseVariable("body"),C.parseString("result"));
                    return macro(env)},C.parseNoOperandsApp(C.parseVariable("null"))])))(global_env);
            (C.parseOperandsApp(C.parseVariable("parseEleInfo"),[C.parseVariable("elementTree")]))(global_env);
            (C.parseNoOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("canvas"),C.parseString("init"));
                    return macro(env)}))(global_env);
            (C.parseNoOperandsApp(function(env){
                    let macro=C.parseGetArr(C.parseVariable("elementTree"),C.parseString("render"));
                    return macro(env)}))(global_env);
            console.timeEnd("编译后的代码");