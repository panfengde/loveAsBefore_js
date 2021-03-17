import analyze_entry from "../analyze/index"

/**
 *  分析代码的入口
 */
function Compiler(parsed_code, env) {
    /// let code_pairs = exp_parse(code_str)
    console.log(parsed_code)
    return analyze_entry(parsed_code)
}

export default Compiler