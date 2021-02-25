
import tools from './tools.js'
import analyze from './analyze.js'

/**
 *  根据代码的操作符，选择相应的逻辑
 */
function analyze_entry(parsed_code) {
    
    let tag = tools.checkTag_and_packageClass(parsed_code)

    //console.log("****",tag,parsed_code)
    switch (tag) {
        case "number":
            return analyze.number(parsed_code);
        case "string":
            return analyze.string(parsed_code);
        case "boolean":
            return analyze.boolean(parsed_code);
        case "variable":
            return analyze.variable(parsed_code);
        case ".":
            return analyze.getArr(parsed_code);
        case "quote":
            return analyze.quote(parsed_code);
        case "set!":
            return analyze.set(parsed_code);
        case "if":
            return analyze._if(parsed_code);
        case "cons":
            return analyze.cons(parsed_code);
        case "define":
            return analyze.define(parsed_code);
        case "begin":
            return analyze.begin(parsed_code);
        case "let":
            return analyze._let(parsed_code);
        case "lambda":
            return analyze.lambda(parsed_code);
        case "class":
            return analyze._class(parsed_code);
        case "define-syntax":
            return analyze.defineSyntax(parsed_code);
        case "app":
            return analyze.app(parsed_code);
        default:
            console.error("未定义的操作符", code_op, parsed_code)
            throw SyntaxError();
    }
}



export default analyze_entry