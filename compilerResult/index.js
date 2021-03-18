(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(function (env) {
          return "ok";
        })(global_env);(analyze.parseValueDefine("xml",analyze.parseString(" <div> loveAsBefore <div> loveAsBefore </div> <div> 类测试 </div> <div> loveAsBefore </div> <div> 类测试 <div> loveAsBefore </div> <div> 类测试 <div> loveAsBefore </div> <div> 类测试 </div> </div> </div> </div> </div> <div> 类测试 </div> ")))(global_env);(analyze.parseOperandsApp(analyze.parseVariable("display"),[analyze.parseVariable("xml")]))(global_env);(analyze.parseClass("html2json",["sxml"],function (env) {
                (function (env) {
                (analyze.parseListSet(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),analyze.parseVariable("sxml")))(env);
                return (analyze.parseListSet(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach"))])))(env);
            })(env);
                return (analyze.parseVariable("this"))(env);
            },function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseLambdaDefine("xml2list",analyze.parseLambda(function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseValueDefine("result",analyze.parseNoOperandsApp(analyze.parseVariable("list"))))(env);
                return (analyze.parseValueDefine("oneChild",analyze.parseString("")))(env);
            })(env);
                return (analyze.parseValueDefine("start",analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueDefine("txtType",analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueDefine("componentType",analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueDefine("componentFlag",analyze.parseNumber(0)))(env);
            })(env);
                return (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseLambda(function (env) {
                (function (env) {
                (analyze.parseString("选择逻辑"))(env);
                return (analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!"),[analyze.parseVariable("start")]),function (env) {
                (analyze.parseIf(analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!="),[analyze.parseVariable("x"),analyze.parseString(" ")]),ok,analyze.parseBboolean(false)),function (env) {
                (function (env) {
                (analyze.parseValueSet(start,analyze.parseBboolean(true)))(env);
                return (analyze.parseValueSet(txtType,analyze.parseBboolean(true)))(env);
            })(env);
                return (analyze.parseValueSet(componentType,analyze.parseBboolean(false)))(env);
            },analyze.parseBboolean(false)))(env);
                return (analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseVariable("x"),analyze.parseString("<")]),function (env) {
                (function (env) {
                (analyze.parseValueSet(start,analyze.parseBboolean(true)))(env);
                return (analyze.parseValueSet(componentType,analyze.parseBboolean(true)))(env);
            })(env);
                return (analyze.parseValueSet(txtType,analyze.parseBboolean(false)))(env);
            },analyze.parseBboolean(false)))(env);
            },analyze.parseIf(analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!="),[analyze.parseVariable("x"),analyze.parseString(" ")]),ok,analyze.parseBboolean(false)),function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseString("文字结束逻辑"))(env);
                return (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseVariable("oneChild")]))(env);
            })(env);
                return (analyze.parseValueSet(oneChild,analyze.parseString("")))(env);
            })(env);
                return (analyze.parseValueSet(start,analyze.parseBboolean(true)))(env);
            })(env);
                return (analyze.parseValueSet(componentType,analyze.parseBboolean(true)))(env);
            })(env);
                return (analyze.parseValueSet(txtType,analyze.parseBboolean(false)))(env);
            },analyze.parseBboolean(false))))(env);
            })(env);
                return (analyze.parseIf(analyze.parseVariable("start"),analyze.parseIf(analyze.parseVariable("componentType"),function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseValueSet(oneChild,analyze.parseOperandsApp(analyze.parseVariable("+"),[analyze.parseVariable("oneChild"),analyze.parseVariable("x")])))(env);
                return (analyze.parseVariable("oneChild"))(env);
            })(env);
                return (ok)(env);
            })(env);
                return (analyze.parseIf(analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!="),[analyze.parseVariable("x"),analyze.parseString(" ")]),ok,analyze.parseBboolean(false)),function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseVariable("oneChild")]))(env);
                return (analyze.parseValueSet(oneChild,analyze.parseString("")))(env);
            })(env);
                return (analyze.parseValueSet(start,analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueSet(txtType,analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueSet(componentType,analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueSet(componentFlag,analyze.parseNumber(0)))(env);
            },analyze.parseBboolean(false)))(env);
            },ok),analyze.parseBboolean(false)))(env);
            },["x"])]))(env);
            })(env);
                return (analyze.parseVariable("result"))(env);
            },["xml"])))(env);
                return (analyze.parseLambdaDefine("parseComponents",analyze.parseLambda(function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseValueDefine("tagResult",analyze.parseString("")))(env);
                return (analyze.parseValueDefine("_start",analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueDefine("_tagInfoEnd",analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueDefine("_childFlag",analyze.parseNumber(1)))(env);
            })(env);
                return (analyze.parseValueDefine("_getChild",analyze.parseString("")))(env);
            })(env);
                return (analyze.parseValueDefine("childResult",analyze.parseString("")))(env);
            })(env);
                return (analyze.parseValueDefine("componentResult",analyze.parseVariable("null")))(env);
            })(env);
                return (analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseNumber(0)]),analyze.parseString("<")]),function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseLambda(analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!"),[analyze.parseVariable("_tagInfoEnd")]),function (env) {
                (analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!"),[analyze.parseVariable("_start")]),analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseVariable("x"),analyze.parseString("<")]),analyze.parseValueSet(_start,analyze.parseBboolean(true)),analyze.parseBboolean(false)),analyze.parseBboolean(false)))(env);
                return (analyze.parseIf(analyze.parseVariable("_start"),function (env) {
                (analyze.parseIf(analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!="),[analyze.parseVariable("x"),analyze.parseString(" ")]),ok,analyze.parseBboolean(false)),function (env) {
                (analyze.parseValueSet(oneChild,analyze.parseOperandsApp(analyze.parseVariable("+"),[analyze.parseVariable("oneChild"),analyze.parseVariable("x")])))(env);
                return (analyze.parseVariable("oneChild"))(env);
            },analyze.parseBboolean(false)))(env);
                return (analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseVariable("x"),analyze.parseString(">")]),analyze.parseValueSet(_tagInfoEnd,analyze.parseBboolean(true)),analyze.parseBboolean(false)))(env);
            },analyze.parseBboolean(false)))(env);
            },analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!="),[analyze.parseVariable("_childFlag"),analyze.parseNumber(0)]),function (env) {
                (analyze.parseIf(analyze.parseVariable("componentType"),function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseValueSet(oneChild,analyze.parseOperandsApp(analyze.parseVariable("+"),[analyze.parseVariable("oneChild"),analyze.parseVariable("x")])))(env);
                return (analyze.parseVariable("oneChild"))(env);
            })(env);
                return (ok)(env);
            })(env);
                return (analyze.parseIf(analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!="),[analyze.parseVariable("x"),analyze.parseString(" ")]),ok,analyze.parseBboolean(false)),function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseVariable("oneChild")]))(env);
                return (analyze.parseValueSet(oneChild,analyze.parseString("")))(env);
            })(env);
                return (analyze.parseValueSet(start,analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueSet(txtType,analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueSet(componentType,analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueSet(componentFlag,analyze.parseNumber(0)))(env);
            },analyze.parseBboolean(false)))(env);
            },ok))(env);
                return (function (env) {
                (analyze.parseValueSet(oneChild,analyze.parseOperandsApp(analyze.parseVariable("+"),[analyze.parseVariable("oneChild"),analyze.parseVariable("x")])))(env);
                return (analyze.parseVariable("oneChild"))(env);
            })(env);
            },analyze.parseBboolean(false))),["x","index"])]))(env);
                return (analyze.parseValueDefine("__childLength",analyze.parseNoOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")))))(env);
            })(env);
                return (analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseOperandsApp(analyze.parseVariable("-"),[analyze.parseVariable("__childLength"),analyze.parseNumber(1)])]),analyze.parseString("/")]),function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseValueDefine("_temp",analyze.parseVariable("__childLength")))(env);
                return (analyze.parseValueDefine("_temp2",analyze.parseVariable("__childLength")))(env);
            })(env);
                return (analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseVariable("_temp"),analyze.parseVariable("_temp2")]),analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseOperandsApp(analyze.parseVariable("-"),[analyze.parseVariable("__childLength"),analyze.parseNumber(1)])]),analyze.parseString("<")]),analyze.parseValueSet(_temp,function (env) {
                (analyze.parseValueSet(__childLength,analyze.parseOperandsApp(analyze.parseVariable("-"),[analyze.parseVariable("__childLength"),analyze.parseNumber(1)])))(env);
                return (analyze.parseVariable("__childLength"))(env);
            }),function (env) {
                (analyze.parseValueSet(__childLength,analyze.parseOperandsApp(analyze.parseVariable("-"),[analyze.parseVariable("__childLength"),analyze.parseNumber(1)])))(env);
                return (analyze.parseVariable("__childLength"))(env);
            }),function (env) {
                (analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseOperandsApp(analyze.parseVariable("-"),[analyze.parseVariable("__childLength"),analyze.parseNumber(1)])]),analyze.parseString("<")]),analyze.parseValueSet(_temp,function (env) {
                (analyze.parseValueSet(__childLength,analyze.parseOperandsApp(analyze.parseVariable("-"),[analyze.parseVariable("__childLength"),analyze.parseNumber(1)])))(env);
                return (analyze.parseVariable("__childLength"))(env);
            }),function (env) {
                (analyze.parseValueSet(__childLength,analyze.parseOperandsApp(analyze.parseVariable("-"),[analyze.parseVariable("__childLength"),analyze.parseNumber(1)])))(env);
                return (analyze.parseVariable("__childLength"))(env);
            }))(env);
                return (ok)(env);
            }))(env);
            })(env);
                return (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseLambda(analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("<"),[analyze.parseVariable("index"),analyze.parseOperandsApp(analyze.parseVariable("-"),[analyze.parseVariable("_temp"),analyze.parseNumber(1)])]),function (env) {
                (analyze.parseValueSet(oneChild,analyze.parseOperandsApp(analyze.parseVariable("+"),[analyze.parseVariable("oneChild"),analyze.parseVariable("x")])))(env);
                return (analyze.parseVariable("oneChild"))(env);
            },analyze.parseBboolean(false)),["x","index"])]))(env);
            },analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueSet(componentResult,analyze.parseOperandsApp(analyze.parseVariable("parseTag"),[analyze.parseVariable("tagResult")])))(env);
            })(env);
                return (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseOperandsApp(analyze.parseVariable("cons"),[analyze.parseString("child"),analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseVariable("childResult")])])]))(env);
            },function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseValueDefine("temp",analyze.parseNoOperandsApp(analyze.parseVariable("json"))))(env);
                return (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseOperandsApp(analyze.parseVariable("cons"),[analyze.parseString("child"),analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseVariable("childResult")])])]))(env);
            })(env);
                return (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseOperandsApp(analyze.parseVariable("cons"),[analyze.parseString("child"),analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseVariable("childResult")])])]))(env);
            })(env);
                return (analyze.parseValueSet(componentResult,analyze.parseVariable("temp")))(env);
            }))(env);
            })(env);
                return (analyze.parseVariable("componentResult"))(env);
            },["xml"])))(env);
            })(env);
                return (analyze.parseLambdaDefine("parseTag",analyze.parseLambda(function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseValueDefine("tag",analyze.parseString("")))(env);
                return (analyze.parseValueDefine("tagEnd",analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueDefine("child",analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueDefine("arrInfo",analyze.parseNoOperandsApp(analyze.parseVariable("json"))))(env);
            })(env);
                return (analyze.parseValueDefine("arrName",analyze.parseString("")))(env);
            })(env);
                return (analyze.parseValueDefine("arrNamestart",analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueDefine("arrNameEnd",analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueDefine("arrValue",analyze.parseString("")))(env);
            })(env);
                return (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseLambda(analyze.parseIf(analyze.parseVariable("tagEnd"),function (env) {
                (function (env) {
                (analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseVariable("x"),analyze.parseString("=")]),analyze.parseValueSet(arrNameEnd,analyze.parseBboolean(true)),analyze.parseBboolean(false)))(env);
                return (analyze.parseIf(analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!="),[analyze.parseVariable("x"),analyze.parseString(" ")]),ok,analyze.parseBboolean(false)),analyze.parseIf(analyze.parseVariable("arrNameEnd"),function (env) {
                (analyze.parseValueSet(oneChild,analyze.parseOperandsApp(analyze.parseVariable("+"),[analyze.parseVariable("oneChild"),analyze.parseVariable("x")])))(env);
                return (analyze.parseVariable("oneChild"))(env);
            },function (env) {
                (analyze.parseValueSet(oneChild,analyze.parseOperandsApp(analyze.parseVariable("+"),[analyze.parseVariable("oneChild"),analyze.parseVariable("x")])))(env);
                return (analyze.parseVariable("oneChild"))(env);
            }),analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseIf(analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!="),[analyze.parseVariable("x"),analyze.parseString(" ")]),ok,analyze.parseBboolean(false)),function (env) {
                (function (env) {
                (function (env) {
                (function (env) {
                (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseOperandsApp(analyze.parseVariable("cons"),[analyze.parseString("child"),analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseVariable("childResult")])])]))(env);
                return (analyze.parseValueSet(arrName,analyze.parseString("")))(env);
            })(env);
                return (analyze.parseValueSet(arrNamestart,analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueSet(arrNameEnd,analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseValueSet(arrValue,analyze.parseString("")))(env);
            },analyze.parseBboolean(false)))(env);
            },analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("="),[analyze.parseVariable("x"),analyze.parseString(" ")]),analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!="),[analyze.parseVariable("tag"),analyze.parseString("")]),analyze.parseValueSet(tagEnd,analyze.parseBboolean(true)),analyze.parseBboolean(false)),function (env) {
                (analyze.parseValueSet(oneChild,analyze.parseOperandsApp(analyze.parseVariable("+"),[analyze.parseVariable("oneChild"),analyze.parseVariable("x")])))(env);
                return (analyze.parseVariable("oneChild"))(env);
            })),["x"])]))(env);
            })(env);
                return (analyze.parseString("这里是上面未添加的属性，最后处理一下"))(env);
            })(env);
                return (analyze.parseIf(analyze.parseOperandsApp(analyze.parseVariable("!="),[analyze.parseVariable("arrValue"),analyze.parseString("")]),analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseOperandsApp(analyze.parseVariable("cons"),[analyze.parseString("child"),analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseVariable("childResult")])])]),analyze.parseBboolean(false)))(env);
            })(env);
                return (analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseOperandsApp(analyze.parseVariable("cons"),[analyze.parseString("child"),analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseVariable("childResult")])])]))(env);
            })(env);
                return (analyze.parseVariable("arrInfo"))(env);
            },["tagIngo"])))(env);
            })(env);
                return (analyze.parseLambdaDefine("parse",analyze.parseLambda(function (env) {
                (function (env) {
                (analyze.parseValueDefine("result",analyze.parseNoOperandsApp(analyze.parseVariable("list"))))(env);
                return (analyze.parseLet(analyze.parseOperandsApp(analyze.parseLambda(analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseLambda(analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseVariable("oneComonents")])]),["oneComonents"])]),["components"]),[analyze.parseOperandsApp(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")),[analyze.parseVariable("xml")])])))(env);
            })(env);
                return (analyze.parseVariable("result"))(env);
            },["xml"])))(env);
            }))(global_env);(analyze.parseValueDefine("body",analyze.parseNew(analyze.parseOperandsApp(analyze.parseVariable("html2json"),[analyze.parseVariable("xml")]))))(global_env);(analyze.parseGetArr(analyze.parseVariable("xml"),analyze.parseString("forEach")))(global_env);