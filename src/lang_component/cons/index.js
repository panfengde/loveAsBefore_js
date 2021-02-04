import {
    the_null
} from '../aotom_constant'

class cons {
    constructor(car, cdr) {
        if (arguments.length != 2) {
            throw SyntaxError("cons的参数必须是2个")
        }
        car && (this.car = car);
        cdr && (this.cdr = cdr);
        this.type = "cons"
    }

    set_car(car) {
        this.car = car
    }

    set_cdr(cdr) {
        this.cdr = cdr
    }

    map(fun) {
        let _this = this

        function iteration(pair) {
            if (pair.type && (pair.type == "pair")) {
                return new cons(fun(pair.car), iteration(pair.cdr))
            } else {
                if (/^\(\s*\)$/.test(pair)) {
                    return "()"
                } else {
                    return fun(pair)
                }
            }
        }

        return new cons(fun(_this.car), iteration(_this.cdr))
    }

    tree_map(fun) {
        let _this = this

        function iteration(pair) {
            if (pair.type && (pair.type == "pair")) {
                return new cons(iteration(pair.car), iteration(pair.cdr))
            } else {
                if (/^\(\s*\)$/.test(pair)) {
                    return "()"
                } else {
                    return fun(pair)
                }
            }
        }

        return new cons(iteration(_this.car), iteration(_this.cdr))
    }

    forEach(fun) {
        let _this = this

        function iteration(pair) {
            if (pair.type && (pair.type == "pair")) {
                fun(pair.car)
                iteration(pair.cdr)
            } else {
                if (/^\(\s*\)$/.test(pair)) {
                    return "forEach_ok"
                }
            }
        }

        fun(_this.car)
        iteration(_this.cdr)
    }


    getClone() {
        let _this = this

        function iteration(pair) {
            if (pair.type == "pair") {
                return new cons(pair.car, iteration(pair.cdr))
            } else if (/^\(\s*\)$/.test(pair)) {
                return "()"
            } else {
                return pair
            }
        }

        return new cons(iteration(_this.car), iteration(_this.cdr))
    }

    length() {
        let length = 0;

        function iteration(pair) {
            if (pair != "()") {
                length = length + 1;
                iteration(pair.cdr)
            }
        }

        iteration(this)
        return length;
    }
}






class list extends cons {
    /* constructor_(car = the_null, cdr1 = the_null, ...cdr) {
        super(car, cdr1)
        this.car = car
        this.type = "list"
        if (cdr1 == the_null && cdr.length == 0) {
            this.set_cdr(the_null)
        } else {
            this.set_cdr(new list(cdr1, ...cdr))
        }
    } */

    constructor(car, ...cdr) {
        super(car, cdr[0])
        this.type = "list"
        car && (this.car = car);
        if (cdr.length > 0) {
            this.cdr = new list(...cdr)
        } else {
            cdr[0] && (this.cdr = cdr[0])
        }
    }

    /**
     * 将两个list或者 list+cons整合为一个list
     */
    append(cdr_list) {
        this.last_items().set_cdr(cdr_list)
        return this
    }

    last_items(code_pairs) {

        function iteration(pairs) {
            if (pairs.cdr == "()") {
                return pairs
            } else {
                return iteration(pairs.cdr)
            }
        }

        return iteration(this)
    }
}

export {
    cons,
    list,
}