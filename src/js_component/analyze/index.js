
import tools from './tools.js'
import analyze from './analyze.js'

/**
 *  根据代码的操作符，选择相应的逻辑
 */
function analyze_entry(parsed_code) {

    let tag_value = tools.checkTag_and_packageClass(parsed_code)
    switch (tag_value[0]) {
        case "number":
            return analyze.number(tag_value[1]);
        case "string":
            return analyze.string(tag_value[1]);
        case "variable":
            return analyze.variable(tag_value[1]);
        case ".":
            return analyze.getArr(tag_value[1]);
        case "quote":
            return analyze.quote(tag_value[1]);
        case "set!":
            return analyze.set(tag_value[1]);
        case "if":
            return analyze._if(tag_value[1]);
        case "cons":
            return analyze.cons(tag_value[1]);
        case "define":
            return analyze.define(tag_value[1]);
        case "begin":
            return analyze.begin(tag_value[1]);
        case "let":
            return analyze._let(tag_value[1]);
        case "lambda":
            return analyze.lambda(tag_value[1]);
        case "define-syntax":
            return analyze.defineSyntax(tag_value[1]);
        case "app":
            return analyze.app(tag_value[1]);
        default:
            console.error("未定义的操作符", code_op, tag_value[1])
            throw SyntaxError();
    }
}



export default analyze_entry