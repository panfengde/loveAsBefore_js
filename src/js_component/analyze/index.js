
import tools from './tools.js'
import {
    explainAnalyze,
    compilerAnalyze
} from './analyze.js'

/**
 *  根据代码的操作符，选择相应的逻辑
 */
function explain_entry(parsed_code) {
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

function compiler_entry(parsed_code) {
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


function explain(parsed_code, env) {
    /// let code_pairs = exp_parse(code_str)
    return explain_entry(parsed_code)
}

export { explain_entry, compiler_entry }