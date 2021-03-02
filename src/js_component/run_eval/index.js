import analyze_entry from "../analyze/index"

/**
 *  分析代码的入口
 */
function run_eval(parsed_code, env) {
    /// let code_pairs = exp_parse(code_str)
    return analyze_entry(parsed_code)(env)
}

export default run_eval