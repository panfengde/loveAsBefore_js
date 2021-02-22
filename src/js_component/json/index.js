"use strict";
import list from '../list/index.js';
import { is_cdr_list, is_car_list_cons_json, is_list } from "../../utils/tools"
import cons from '../cons/index.js';
//list组合最后的的那个list小块，一定是不会包含cdr
/* todo_list
!!!!
函数内部再声明函数,性能非常差，要修改
需要尾递归优化！！！！！！！！！！！！
!!!!
*/
class json extends list {
    constructor(...lists) {
        //暂定 key value 用cons结构来表达
        super()
        this.type = "json";

        for (let i = 0; i < lists.length; i++) {
            let _temp = lists[i]
            this.insert_key_value(_temp.car, _temp.cdr);
        }
    }

    insert_key_value(key, Value) {
        //!!注意：
        //这里需要用快速算法，按规则插入
        //这样将始查询时间大大的减少
        if (this.is_key_exist(key)) {
            console.error("重复的key值", key)
            throw SyntaxError("重复的key值")
        } else {
            this.push(new cons(key, Value))
        }
    }

    set_value_by_key(key, value) {
        let index = this.findIndex((_key) => _key.car == key)
        if (index == -1) {
            this.push(new cons(key, value))
        } else {
            this.set_by_index(index, new cons(key, value))
        }
    }

    get_value_by_key(key) {
        let index = this.findIndex((_key) => _key.car == key)
        if (index != -1) {
            return this.index(index).cdr;
        }
    }

    is_key_exist(key) {
        let index = this.findIndex((_key) => _key.car == key)
        return (index != -1 ? true : false)
        /* if (find) {
            console.err("重复的key值", key)
            throw SyntaxError("重复的key值")
        } */
    }

    get show() {
        function iteration(pairs, result = "\n{\n") {
            if (is_car_list_cons_json(pairs)) {
                result += " " + pairs.car.show;
                return iteration(pairs.cdr, result)
            } else if (is_cdr_list(pairs)) {
                result += " " + pairs.car
                return iteration(pairs.cdr, result)
            } else {
                return result += "" + (pairs ? pairs.car : "") + "\n\}\n"
            }
        }
        return iteration(this)
    }
}

export default json;