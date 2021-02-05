"use strict";

import cons from '../cons/index.js';
import { is_cdr_list, is_car_list, is_list } from "../../utils/tools"


//list组合最后的的那个list小块，一定是不会包含cdr

/* todo_list
!!!!
函数内部再声明函数,性能非常差，要修改

需要尾递归优化！！！！！！！！！！！！
!!!!
*/
class list extends cons {
    constructor(car, ...extra) {
        //console.log(cdr.length,cdr)
        super(car, extra[0])
        this.type = "list"
        if (extra.length > 0) {
            this.set_cdr(new list(...extra))
        }
    }
    find(index) {

    }

    /**
     * 将两个list或者 list+cons整合为一个list
     */
    push(cdr_list) {
        this.last_items().set_cdr(cdr_list)
        return this
    }

    getClone() {
        let _this = this;
        function iteration(pair) {
            if (is_cdr_list(pair)) {
                let result = new list(pair.car)
                result.set_cdr(iteration(pair.cdr))
                return result
            } else {
                return new list(pair.car)
            }
        }

        return iteration(this)
    }


    last_items() {
        function iteration(pair) {
            if (is_cdr_list(pair)) {
                return iteration(pair.cdr)
            } else {
                return pair
            }
        }
        return iteration(this)
    }

    map(fun) {
        function iteration(pair) {
            if (is_cdr_list(pair)) {
                let result = new list(fun(pair.car))
                result.set_cdr(iteration(pair.cdr))
                return result
            } else {
                return new list(fun(pair.car))
            }
        }

        return iteration(this)

    }

    tree_map(fun) {
        function iteration(pair) {
            if (is_cdr_list(pair)) {
                let car_extra = new list(fun(pair.car))
                let cdr_extra = new list(fun(pair.cdr))
                let result = new list(car_extra)
                result.set_cdr(cdr_extra)
                return result
            } else if (pair) {
                return new list(fun(pair.car))
            }
        }
        return iteration(this)
    }

    forEach(fun) {
        function iteration(pair) {
            if (is_cdr_list(pair)) {
                fun(pair.car)
                iteration(pair.cdr)
            } else {
                fun(pair.car)
            }
        }

        iteration(this)
    }


    length() {
        let length = 0;
        function iteration(pair) {
            if (is_cdr_list(pair)) {
                length = length + 1;
                iteration(pair.cdr)
            } else {
                length = length + 1;
            }
        }

        iteration(this)
        return length;
    }

    get show() {
        function iteration(pairs, result = "(") {
            if (is_car_list(pairs)) {
                result += " " + iteration(pairs.car);
                return iteration(pairs.cdr, result)
            } else if (is_cdr_list(pairs)) {
                result += " " + pairs.car
                return iteration(pairs.cdr, result)
            } else {
                return result += " " + pairs.car + " )"
            }
        }
        return iteration(this)
    }
}

export default list