import cons from '../cons/index'
import list from '../list/index'
import frame from '../frame/index'

function inital_env() {
    let shemeOp_to_jsOp = {
        add: function (...args) {
            return args.reduce((a, b) => (a + b), 0)
        },

        subtract: function (first, ...args) {
            return args.reduce((a, b) => (a - b), first)
        },

        multiplication: function (...args) {
            return args.reduce((a, b) => (a * b), 1)
        },

        number_equal: function (...args) {
            return args.every((x) => (x == args[0]))
        },
        greater: function (...args) {
            let flag = true;
            for (let i = 0, length = args.length; i < length; i++) {
                if (i != 0 && (args[i] > args[i - 1])) {
                    flag = false;
                    return flag
                }
            }
            return flag
        },
        less: function (...args) {
            let flag = true;
            for (let i = 0, length = args.length; i < length; i++) {
                if (i != 0 && (args[i] < args[i - 1])) {
                    flag = false;
                    return flag
                }
            }
            return flag
        },
        not_equal: function (a, b) {
            return a != b
        },

        division: function (first, ...args) {
            return args.reduce((a, b) => (a / b), first)
        },

        remainder: function (a, b) {
            return a % b
        },

        cons_scheme: function (a, b) {
            return new cons(a, b)
        },
        car_scheme: function (cons) {
            return cons.car
        },
        cdr_scheme: function (cons) {
            return cons.cdr
        },
        nullCons: function (cons) {
            if (cons.type && cons.type == "list") {
                return Boolean(cons || cons == "()")
            } else {
                console.error("不是cons结构，不能使用nullCons判断")
                throw SyntaxError();
            }
        },

        display: function (...pairsAll) {
            function iteration(pairs, result = "(") {
                if (pairs.car && (pairs.car.type == "list")) {
                    result += iteration(pairs.car);
                    return iteration(pairs.cdr, result)
                } else if (pairs != "()") {
                    result += pairs.car + " "
                    if (pairs.cdr.type) {
                        return iteration(pairs.cdr, result)
                    } else {
                        return result += (pairs.cdr == "()" ? "" : pairs.cdr + " ") + ")"
                    }
                } else if (pairs == "()") {
                    return result += ")"
                }
            }

            console.log("打印开始:---------")
            pairsAll.forEach((pairs) => {
                if (!pairs || !pairs.type) {
                    console.log("    ", pairs)
                } else {
                    console.log("    ", iteration(pairs))
                }
            })
            console.log("打印结束:---------")

        },
        /*  eval:function(pairs){
             run_eval()
         } */
    }

    let inital_op = {
        //"eval": new list("original", shemeOp_to_jsOp.eval),
        "+": new list("original", shemeOp_to_jsOp.add),
        "-": new list("original", shemeOp_to_jsOp.subtract),
        "*": new list("original", shemeOp_to_jsOp.multiplication),
        "/": new list("original", shemeOp_to_jsOp.division),
        "=": new list("original", shemeOp_to_jsOp.number_equal),
        ">": new list("original", shemeOp_to_jsOp.greater),
        "<": new list("original", shemeOp_to_jsOp.less),
        "!=": new list("original", shemeOp_to_jsOp.not_equal),
        "remainder": new list("original", shemeOp_to_jsOp.remainder),
        "cons": new list("original", shemeOp_to_jsOp.cons_scheme),
        "car": new list("original", shemeOp_to_jsOp.car_scheme),
        "cdr": new list("original", shemeOp_to_jsOp.cdr_scheme),
        "display": new list("original", shemeOp_to_jsOp.display),
        "judge_null": new list("original", shemeOp_to_jsOp.nullCons),
        "true": true,
        "false": false,
        "else": true,
    }

    let names = []
    let name_ops = []

    for (let name in inital_op) {
        names.push(name)
        name_ops.push(inital_op[name])
    }

    return new frame(
        names,
        name_ops
    );

}
let global_env = inital_env()
export default global_env


