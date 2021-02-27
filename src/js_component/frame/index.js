
import { cons, list, json } from "../analyze/types/index"
import { the_null, the_undefined } from '../aotom_constant/index.js';
/**
 * 环境中使用的框架
 * 框架序列即为环境
 */
class frame extends json {
    constructor(vars = [], values = []) {
        super()
        this.type = "frame"
        this.father_frame = the_null
        this.insert_key_value("_arguments", this.user_var_values)
        vars.forEach((element, index) => {
            this.insert_key_value(element, values[index])
        });
    }
    extend_env(base_env) {
        this.father_frame = base_env;
        //this.frame_and_father_Addr.set_by_index(1, base_env)
    }
    user_insert_var_value(variable, values) {
        this.insert_key_value(variable, values)
    }
    look_vars_frame(variable) {
        if (this.is_key_exist(variable)) {
            return { find: true, value: this.get_value_by_key(variable) }

        } else {
            return { find: false, value: the_undefined }
        }
    }
    look_variable_env(variable) {
        let { find, value } = this.look_vars_frame(variable)
        if (find) {
            return [true, value];
        } else if (this.father_frame != the_null) {
            return this.father_frame.look_variable_env(variable)
        } else {
            return [false]
        }
    }
    set_variable_value_env(variable, value) {
        if (this.is_key_exist(variable)) {
            return this.set_value_by_key(variable, value)
        } else if (this.father_frame != the_null) {
            return this.father_frame.set_value_by_key(variable, value)
        } else {
            console.error("环境中没有该变量", variable)
            throw SyntaxError("环境中没有该变量" + variable + ",无法赋值");
        }
    }

}



export default frame