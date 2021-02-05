"use strict";
import list from '../list/index.js';
import { is_cdr_list, is_car_list, is_list } from "../../utils/tools"
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
            this.insert_key_value(lists[i]);
        }
    }

    insert_key_value(keyValue) {
        //这里需要用快速算法，按规则插入
        //这样将始查询时间大大的减少
        if (this.is_key_exist(keyValue.car)) {
            console.error("重复的key值", keyValue.show)
            throw SyntaxError("重复的key值")
        } else {
            this.push(keyValue)
        }
    }

    set_value_by_key(key, value) {
        this.push(new cons(key, value))
    }

    get_value_by_key(key) {
        return this.find((temp) => temp.car == key)
    }

    is_key_exist(key) {
        let find = this.find((temp) => temp.car == key)
        return find ? true : false
        /* if (find) {
            console.err("重复的key值", key)
            throw SyntaxError("重复的key值")
        } */
    }
}

export default json;