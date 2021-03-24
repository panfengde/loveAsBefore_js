
import tools from './tools.js'
import {
    explainAnalyze,
    C
} from './analyze.js'

/**
 *  根据代码的操作符，选择相应的逻辑
 */
function explainObj_entry(parsed_code) {
    let tag = tools.checkTag_and_packageClass(parsed_code)
    //console.log("****",tag,parsed_code)
    switch (tag) {
        case "number":
            return explainAnalyze.number(parsed_code);
        case "string":
            return explainAnalyze.string(parsed_code);
        case "boolean":
            return explainAnalyze.boolean(parsed_code);
        case "variable":
            return explainAnalyze.variable(parsed_code);
        /* case "null":
            return explainAnalyze.null(parsed_code);
        case "undefined":
            return explainAnalyze.undefined(parsed_code); */
        case "get":
            return explainAnalyze.getArr(parsed_code);
        case "quote":
            return explainAnalyze.quote(parsed_code);
        case "set!":
            return explainAnalyze.set(parsed_code);
        case "if":
            return explainAnalyze._if(parsed_code);
        case "cons":
            return explainAnalyze.cons(parsed_code);
        case "define":
            return explainAnalyze.define(parsed_code);
        case "begin":
            return explainAnalyze.begin(parsed_code);
        case "let":
            return explainAnalyze._let(parsed_code);
        case "lambda":
            return explainAnalyze.lambda(parsed_code);
        case "class":
            return explainAnalyze._class(parsed_code);
        case "new":
            return explainAnalyze._new(parsed_code);
        case "define-syntax":
            return explainAnalyze.defineSyntax(parsed_code);
        case "app":
            return explainAnalyze.app(parsed_code);
        default:
            console.error("未定义的操作符", code_op, parsed_code)
            throw SyntaxError();
    }
}

function compilerObj_entry(parsed_code) {
    let tag = tools.checkTag_and_packageClass(parsed_code)
    //console.log("****",tag,parsed_code)
    switch (tag) {
        case "number":
            return C.number(parsed_code);
        case "string":
            return C.string(parsed_code);
        case "boolean":
            return C.boolean(parsed_code);
        case "variable":
            return C.variable(parsed_code);
        /* case "null":
            return C.null(parsed_code);
        case "undefined":
            return C.undefined(parsed_code); */
        case "get":
            return C.getArr(parsed_code);
        case "quote":
            return C.quote(parsed_code);
        case "set!":
            return C.set(parsed_code);
        case "if":
            return C._if(parsed_code);
        case "cons":
            return C.cons(parsed_code);
        case "define":
            return C.define(parsed_code);
        case "begin":
            return C.begin(parsed_code);
        case "let":
            return C._let(parsed_code);
        case "lambda":
            return C.lambda(parsed_code);
        case "class":
            return C._class(parsed_code);
        case "new":
            return C._new(parsed_code);
        case "define-syntax":
            return C.defineSyntax(parsed_code);
        case "app":
            return C.app(parsed_code);
        default:
            console.error("未定义的操作符", code_op, parsed_code)
            throw SyntaxError();
    }
}


/**
 *  解释代码入口
 */
function explain(parsed_code, env) {
    /// let code_pairs = exp_parse(code_str)
    return explainObj_entry(parsed_code)(env)
}



function compiler(parsed_code, env) {
    /// let code_pairs = exp_parse(code_str)
    return compilerObj_entry(parsed_code)
}

export {
    explain,
    compiler,
    explainObj_entry,
    compilerObj_entry
}