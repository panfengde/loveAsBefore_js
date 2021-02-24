"use strict";

import cons from '../cons/index.js';
import { judge_arr_exist, is_cdr_list, is_car_list_cons_json, is_list } from "../../utils/tools"

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

    index(index) {
        let length = this.length()
        if (index > (length - 1)) {
            //console.error("索引地址超过list的所存储的值的地址",index,this.show)
            throw SyntaxError("索引地址超过list的所存储的值的地址", index, this.show)
        }
        let temp = this
        for (let i = 1; i <= index; i++) {
            temp = temp.cdr;
        }
        return temp.car
    }

    set_by_index(index, value) {
        let length = this.length()
        if (index > (length - 1)) {
            //console.error("索引地址超过list的所存储的值的地址",index,this.show)
            throw SyntaxError("索引地址超过list的所存储的值的地址", index, this.show)
        }
        let temp = this
        for (let i = 1; i <= index; i++) {
            temp = temp.cdr;
        }
        temp.car = value
    }

    find(conditon) {
        let temp;
        function iteration(pair) {
            if (is_cdr_list(pair)) {
                if (pair.car && conditon(pair.car)) {
                    temp = pair.car
                    return
                }
                iteration(pair.cdr)
            } else {
                if (pair.car && conditon(pair)) {
                    temp = pair.car
                    return
                }
            }
        }
        iteration(this)
        return temp
    }

    findIndex(conditon) {
        let index = 0;
        function iteration(pair) {
            if (is_cdr_list(pair)) {
                if (conditon(pair.car)) {
                    return
                }
                index += 1;
                iteration(pair.cdr)
            } else {
                if (pair.car && conditon(pair.car)) {
                    return
                }
                index = -1;
            }
        }
        iteration(this)
        return index
    }

    /**
     * 将两个list或者 list+cons整合为一个list
     */
    push(value) {
        let last_items = this.last_items()

        if (last_items.car) {
            last_items.set_cdr(new list(value))
        } else {
            last_items.set_car(value)
        }
        return this
    }

    getClone() {

        function iteration(pair) {
            if (is_list(pair)) {
                let result;
                if (is_list(pair.car)) {
                    result = new list(iteration(pair.car))
                } else {
                    result = new list(pair.car)
                }

                if (is_cdr_list(pair)) {
                    result.set_cdr(iteration(pair.cdr))
                    return result

                } else if (judge_arr_exist(pair, "cdr")) {
                    result.set_cdr(pair.cdr)
                    return result

                } else {
                    return result
                }

            } else {
                return pair
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
    concat(then_data) {
        if (is_list(then_data)) {
            then_data.forEach((cons) => {
                //两个list的拼接
                this.push(cons)
            })
        } else {
            this.push(then_data)
        }
        return this
    }

    get show() {
        function iteration(pairs, result = "(") {
            if (is_car_list_cons_json(pairs)) {
                result += " " + pairs.car.show;
                return iteration(pairs.cdr, result)
            } else if (is_cdr_list(pairs)) {
                result += " " + (pairs.car && (pairs.car.value || pairs.car))
                return iteration(pairs.cdr, result)
            } else {
                return result += " " + (pairs ? (pairs.car && (pairs.car.value || pairs.car)) : "") + " )"
            }
        }
        return iteration(this)
    }
}

export default list