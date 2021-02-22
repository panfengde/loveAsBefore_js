import cons from '../cons/index'
import list from '../list/index'
import json from '../json/index'
import { the_null, the_undefined } from '../aotom_constant/index.js';
/**
 * 环境中使用的框架
 * 框架序列即为环境
 */
class frame extends cons {
    constructor(vars = [], values = []) {
        super(the_null, the_null)
        this.special_var_values = new json();//存储特殊的变量和值，如 arguments,this,等
        this.user_var_values = new json();//存储用户命名的变量和值
        this.frame = new list(this.special_var_values, this.user_var_values);//存储框架内的变量和值
        this.father_frame = the_null
        this.frame_and_father_Addr = new list(this.frame, this.father_frame);//存储框架内的变量和值，并存储下一个框架的地址,初始的father地址为空

        this.car = this.frame
        this.cdr = this.father_frame

        if (vars.length != values.length) {
            console.warn("变量和变量值个数是否需要一致", vars, values)
            //throw SyntaxError();
        }
        vars.forEach((element, index) => {
            this.user_insert_var_value(element, values[index])
        });
        this.special_insert_var_value("this", this)
        this.special_insert_var_value("_arguments", this.user_var_values)
    }

    extend_env(base_env) {
        this.father_frame = base_env;
        //this.frame_and_father_Addr.set_by_index(1, base_env)
    }

    user_insert_var_value(variable, values) {
        this.user_var_values.insert_key_value(variable, values)
    }

    special_insert_var_value(variable, values) {
        this.special_var_values.insert_key_value(variable, values)
    }

    look_vars_frame(variable) {
        if (this.user_var_values.is_key_exist(variable)) {
            return { find: true, value: this.user_var_values.get_value_by_key(variable) }

        } else if (this.special_var_values.is_key_exist(variable)) {
            return { find: true, value: this.special_var_values.get_value_by_key(variable) }

        } else {
            return { find: false, value: the_undefined }
        }
    }

    look_variable_env(variable) {

        let { find, value } = this.look_vars_frame(variable)
        if (find) {
            return value;
        } else if (this.father_frame != the_null) {
            return this.father_frame.look_variable_env(variable)
        } else {
            console.error("环境中没有该变量", variable)
            throw SyntaxError("环境中没有该变量" + variable);
            return the_undefined;
        }
    }

    set_variable_value_env(variable, value) {
        if (this.user_var_values.is_key_exist(variable)) {
            return this.user_var_values.set_value_by_key(variable, value)
        } else if (this.father_frame != the_null) {
            return this.father_frame.set_value_by_key(variable, value)
        } else {
            console.error("环境中没有该变量", variable)
            throw SyntaxError("环境中没有该变量" + variable + ",无法赋值");
            //return the_undefined
        }
    }
}



export default frame