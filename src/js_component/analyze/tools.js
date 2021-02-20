/**
 * 工具函数
 */
let tools = {
    jude_cons: function (data) {
        return (data.type && data.type == "list")
    },
    code_number_type: function (code_pairs) {
        let re = /^\-?\d+\.?\d*$/;
        if (re.test(code_pairs)) {
            return "number";
        }
    },
    code_string_type: function (code_pairs) {
        let re = /^\s*"/;
        if (re.test(code_pairs)) {
            return "string";
        }
    },
    code_variable_type: function (code_pairs) {
        let re = /^[.a-zA-Z_+\-*!><=\/]+\w*$/;
        if (re.test(code_pairs)) {
            return "variable";
        }
    },
    code_check_tag: function (code_pairs) {
        if (typeof code_pairs != "object") {
            if (this.code_number_type(code_pairs)) {
                return "number"
            } else if (this.code_string_type(code_pairs)) {
                return "string"
            } else if (this.code_variable_type(code_pairs)) {
                return "variable"
            }
        } else {
            let keyword = new Set([
                "define",
                "quote",
                "if",
                "begin",
                "set!",
                "lambda",
                "define-syntax",
                "cons",
                "let",
                "'",
            ])
            if (keyword.has(code_pairs.car)) {
                return code_pairs.car
            } else {
                return "app"
            }
        }
    },
    list_to_array: function (list) {
        //将cons组成的list数据结构转换为js数组的数据结构

        if (list.type && list.type == "list") {
            let result = []
            list.forEach((e) => (result.push(e)))
            return result
        } else {
            return []
        }
    },
    array_to_list: function (array) {
        return new list(...array)
    },
    
    /* last_items: function (code_pairs) {
        function iteration(pairs) {
            if (pairs.cdr == "()") {
                return pairs
            } else {
                return iteration(pairs.cdr)
            }
        }

        return iteration(code_pairs)
    } */
}



export default tools