import { is_car_list, is_cdr_list, is_list, is_car_list_cons_json, judge_arr_exist } from '../../../utils/tools';
let string_exp_test = new RegExp(/^\"[\s\S]*\"$/g)


class _null {
    constructor() {
        this.type = "null"
        this.value = false
    }
}

class _undefined {
    constructor() {
        this.type = "undefined"
        this.value = false
    }
}

/**
 * !重要提示
 * @被lab使用的方法  以"__"开始的方法，都是可以被lab语言调用的方法，
 * @分析语言使用的方法 不以__开头的其他方法，是解析语言时可能用到的方法，这些方法不能被lab语言直接调用。
 */

class base {
    constructor(value) {
        this.value = value
    }
    get show() {
        return this.value.show || this.value
    }

    static setTypeValue(valueString) {
        //console.log(valueString, string_exp_test.test(valueString))
        if (valueString[0] == "\"") {
            valueString = valueString.slice(1, -1)
            return (new _string(valueString))
        }
        if (valueString === "false") {
            return (new _boolean(false))
        }

        if (valueString === "true" || valueString === "else") {
            return (new _boolean(true))
        }

        if (!isNaN(Number(valueString))) {
            return (new _number(valueString))
        }
        return valueString
    }

    static judgeTypeAndClean(valueString) {
        if (valueString[0] == "\"") {
            valueString = valueString.slice(1, -1)
            return { tag: "string", valueString: valueString }
        }
        if (valueString === "false" || valueString === "true" || valueString === "else") {
            return { tag: "boolean", valueString: valueString }
        }

        if (!isNaN(Number(valueString))) {
            return { tag: "number", valueString: valueString }
        }

        return { tag: "variable", valueString: valueString }
    }


    static __add(...datas) {
        //加法
        let tmep = datas[0].value;
        datas.forEach((obj, i) => {
            if (i != 0) {
                tmep += obj.value;
            }
        });

        return new datas[0].constructor(tmep)
    }

    static __subtract(...datas) {
        let tmep = datas[0].value;
        datas.forEach((obj, i) => {
            if (i != 0) {
                tmep -= obj.value;
            }
        });
        return new _number(tmep)
    }

    static __multiplication(...datas) {
        let tmep = datas[0].value;
        datas.forEach((obj, i) => {
            if (i != 0) {
                tmep *= obj.value;
            }
        });
        return new _number(tmep)
    }

    static __division(...datas) {
        let tmep = datas[0].value;
        datas.forEach((obj, i) => {
            if (i != 0) {
                tmep /= obj.value;
            }
        });
        return new _number(tmep)
    }

    static __equal(a, b) {
        return new _boolean(a.value === b.value)
    }
    static __not_equal(a, b) {
        return new _boolean(a.value !== b.value)
    }
    static __reverse(a) {
        return new _boolean(!a.value)
    }

    static clone(data) {
        if (data instanceof base) {
            return new data.constructor(data.value)
        } else {
            return data
        }
    }
}

class _number extends base {
    constructor(props) {
        super(props)
        this.type = "number"
        this.value = Number(props)
    }
    hello() {
        alert("hello")
    }

    static __less(a, b) {
        return new _boolean(a.value < b.value)
    }

    static __greater(a, b) {
        return new _boolean(a.value > b.value)
    }
}

class _string extends base {
    constructor(props) {
        super(props)
        this.type = "string"
        this.value = props
    }

    index(addr) {
        return new _string(this.value[addr.value])
    }

    length() {
        console.log(this)
        return new _number(this.value.length)
    }

    __length() {
        return new _number(this.value.length)
    }
    __forEach(fun, env, eval_app) {
        if (fun) {
            for (let i = 0, legnth = this.value.length; i < legnth; i++) {
                eval_app(fun, new list(new _string(this.value[i]), new _number(i)), null, env)
            }
        }
    }
    __index(addr) {
        //let charIndex=eval_app(addr, new list(), null, env)
        //console.log(this.value,this.value[addr.value],"xxxxxxxxxpppppppppppp")
        return new _string(this.value[addr.value])
    }
    get show() {
        return `"${this.value.show || this.value}"`
    }
}

class _boolean extends base {
    constructor(props) {
        super(props)
        this.type = "boolean"
        this.value = Boolean(props)
    }

    static __nullList(list) {
        if (is_list(list)) {
            return new _boolean(!judge_arr_exist(list, "car"))
        } else {
            return new _boolean(true)
        }
    }
}

class lambdaBase {
    constructor(args, body, env, _this) {
        this.value = "[lambda native code]"
        this.args = args;
        this.ananlyzed_body = body;
        this.define_env = env;//定义时的环境
        this.type = "lambda"
        this._this = _this
    }

    call(_this) {
        return new lambdaBase(this.args, this.ananlyzed_body, this.define_env, _this)
    }

}

class _class {
    constructor(args, body, env) {
        this.value = "[_class native code]"
        this.args = args;
        this.ananlyzed_body = body;
        this.define_env = env;//定义时的环境
        this.type = "class"
    }
}

class cons {
    constructor(car, cdr) {
        if (arguments.length != 2) {
            throw SyntaxError("cons的参数必须是2个")
        }
        typeof car != "undefined" && (this.car = car);
        typeof cdr != "undefined" && (this.cdr = cdr);
        this.value = true
        this.type = "cons"
    }

    set_car(car) {
        this.car = car
    }

    set_cdr(cdr) {
        this.cdr = cdr
    }

    get show() {
        return `"${this.car instanceof Object ? (this.car.value || this.car.value) : this.car}":${this.cdr instanceof Object ? (this.cdr.show || this.cdr.value) : this.cdr}`;
    }
}

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
    _literal() {
        function iteration(pairs, result = "[") {
            if (is_car_list(pairs)) {
                result += `${pairs.car.literal()},`;
                return iteration(pairs.cdr, result)
            } else if (is_cdr_list(pairs)) {
                result += `"${(pairs.car && (pairs.car.value || pairs.car))}",`
                return iteration(pairs.cdr, result)
            } else {
                if (pairs) {
                    result += `"${pairs.car && (pairs.car.value || pairs.car)}"`
                }
                return result += "]"
            }
        }
        return iteration(this)
    }

    literal() {
        function iteration(pair, result = "[") {
            if (is_cdr_list(pair)) {
                //result += `${(pair.car instanceof _string)?`"${pair.car}"`:pair.car}+ ,`
                result += pair.car + ","
                return iteration(pair.cdr, result)
            } else {
                result += pair.car + "]"
                return result
            }
        }
        return iteration(this)
    }


    static parseLiteral(elements) {
        //parseLiteral接受数组
        function iteration(elements) {
            return new list(...elements.map((ele) => {
                if (ele instanceof Array) {
                    return iteration(...ele)
                } else {
                    return ele
                }
            }))

        }
        return iteration(elements)
    }


    get show() {
        function iteration(pairs, result = "[") {
            if (is_car_list_cons_json(pairs)) {
                result += " " + pairs.car.show;
                return iteration(pairs.cdr, result)
            } else if (is_cdr_list(pairs)) {
                result += " " + (pairs.car && (pairs.car.value || pairs.car)) + ","
                return iteration(pairs.cdr, result)
            } else {
                return result += " " + (pairs ? (pairs.car && (pairs.car.value || pairs.car)) : "") + " ]"
            }
        }
        return iteration(this)
    }
    __forEach(fun, env, eval_app) {
        let i = 0;
        function iteration(pair) {
            let index = new _number(i)
            i += 1;
            if (is_cdr_list(pair)) {
                eval_app(fun, new list(pair.car, index), null, env)
                iteration(pair.cdr)
            } else {
                eval_app(fun, new list(pair.car, index), null, env)
            }
        }
        iteration(this)
    }
    __length() {
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
        return new _number(length);
    }
    __push(data) {
        this.push(data)
    }
    __pop() {
        //删除最后的元素
        if (is_cdr_list(this) && is_cdr_list(this.cdr)) {
            return this.cdr.__pop()
        } else if (is_cdr_list(this)) {
            let temp = this.cdr;
            delete this.cdr;
            return temp
        } else {
            if (this.car) {
                let temp = this.car;
                delete this.car;
                return temp
            } else {
                return new _null()
            }

        }

    }
}

class json extends list {
    constructor(...elemnts) {
        //暂定 key value 用cons结构来表达
        super()
        this.type = "json";
        //console.log(elemnts)
        if (elemnts[0]) {
            if (typeof elemnts[0].car === "object") {
                //lab语言中，用这个
                for (let i = 0; i < elemnts.length; i++) {
                    let _temp = elemnts[i]
                    this.insert_key_value(_temp.car.value, _temp.cdr);
                }
            } else {
                //分析代码时，用这个
                for (let i = 0; i < elemnts.length; i++) {
                    let _temp = elemnts[i]
                    this.insert_key_value(_temp.car, _temp.cdr);
                }
            }
        }
    }

    insert_key_value(key, Value) {
        // !!注意：
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
        function iteration(pairs, result = "{") {
            if (is_car_list_cons_json(pairs)) {
                result += " " + pairs.car.show;
                return iteration(pairs.cdr, result)
            } else if (is_cdr_list(pairs)) {
                result += " " + (pairs.car && (pairs.car.value || pairs.car)) + ","
                return iteration(pairs.cdr, result)
            } else {
                return result += " " + (pairs ? (pairs.car && (pairs.car.value || pairs.car)) : "") + " }"
            }
        }
        return iteration(this)
    }

    __insert(keyValue) {
        // !!注意：
        //这里需要用快速算法，按规则插入
        //这样将始查询时间大大的减少
        if (this.is_key_exist(keyValue.car.value)) {
            console.error("重复的key值", key)
            //this.set_value_by_key(keyValue.car.value,keyValue.cdr)
            throw SyntaxError("重复的key值")
        } else {
            this.push(new cons(keyValue.car.value, keyValue.cdr))
        }
    }

    __set(key, value) {
        let index = this.findIndex((_key) => _key.car == key.value)
        if (index == -1) {
            this.push(new cons(key.value, value))
        } else {
            this.set_by_index(index, new cons(key.value, value))
        }
    }

    __get(key) {
        let index = this.findIndex((_key) => _key.car == key.value)
        if (index != -1) {
            return this.index(index).cdr;
        }
    }
}

export {
    _null, _undefined, base, _number, _string, _boolean, lambdaBase, _class, cons, list, json,
}