import list from '../list/index'

/**
 * 环境中使用的框架
 * 框架序列即为环境
 */
class frame {
    constructor(vars = [], values = []) {
        //环境也应该是cons结构构成
        if (vars.length != values.length) {
            console.warn("变量和变量值个数是否需要一致", vars, values)
            //throw SyntaxError();
        }

        this.vars_values = new list()

        
        vars.forEach((element, index) => {
            this.insert_var_value_frame(element, values[index])
        });
        this.insert_var_value_frame("_args", tools.array_to_list(values))
        this.out_env = null
    }

    extend_env(base_env) {
        this.out_env = base_env
    }

    insert_var_value_frame(variable, values) {
        //增加判断，variable, values要存在
        this.vars_values[variable] = values;
        // return 'ok'
        /* if (variable in this.vars_values) {
             console.log("变量在该环境中已声明")
         } else {
             this.vars_values[variable] = values
         }
         return 'ok'*/
    }

    look_vars_frame(variable) {
        if (variable in this.vars_values) {
            return this.vars_values[variable]
        }
    }

    look_variable_env(variable) {
        if (variable in this.vars_values) {
            return this.vars_values[variable]
        } else if (this.out_env == null) {
            console.error("环境中没有该变量", variable)
            throw SyntaxError();
        } else {
            return this.out_env.look_variable_env(variable)
        }
    }

    set_variable_value_env(variable, value) {
        // console.log("set!变量",variable, value)
        if (variable in this.vars_values) {
            this.vars_values[variable] = value
            //return "ok"
        } else if (this.out_env == null) {
            console.error("环境中没用该变量", variable)
            throw SyntaxError();
        } else {
            return this.out_env.set_variable_value_env(variable, value)
        }
    }
}