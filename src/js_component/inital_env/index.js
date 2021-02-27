import frame from '../frame/index';
import { is_car_list, is_cdr_list, is_list, is_car_list_cons_json, judge_arr_exist } from '../../utils/tools';
import { base, _boolean, _number, _class, cons, list, json } from "../analyze/types/index"


function inital_env() {
    let shemeOp_to_jsOp = {
        add: base.__add,
        subtract: base.__subtract,
        multiplication: base.__multiplication,
        division: base.__division,
        equal: base.__equal,
        reverse: base.__reverse,
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
        less: _number.__less,
        not_equal: base.__not_equal,
        remainder: function (a, b) {
            return a % b
        },
        cons_scheme: function (a, b) {
            alert(1)
            console.log(a, b)
            return new cons(a, b)
        },
        car_scheme: function (cons) {
            return cons.car
        },
        cdr_scheme: function (cons) {
            return cons.cdr
        },
        nullList: _boolean.__nullList,
        display: function (...pairsAll) {
            /*  pairsAll.forEach((pairs) => {
                 if (is_list(pairs)) {
                     console.log("    ", pairs.show)
                 } else {
                     console.log("    ", pairs && (pairs.value || pairs))
                 }
             }) */
            let result = pairsAll.map((pairs) => {
                if (is_list(pairs)) {
                    return ("    ", pairs.show)
                } else {
                    return ("    ", (pairs.value || pairs))
                }
            })
            console.log(result.join(","))


        },
        list: function (...elemnts) {
            return new list(...elemnts)
        },
        json: function (...elemnts) {
            return new json(...elemnts)
        },
        /* eval:function(pairs){
             run_eval()
         } */
    }
    let inital_op = {
        //"eval": new list("original", shemeOp_to_jsOp.eval),
        "+": new list("original", shemeOp_to_jsOp.add),
        "-": new list("original", shemeOp_to_jsOp.subtract),
        "*": new list("original", shemeOp_to_jsOp.multiplication),
        "/": new list("original", shemeOp_to_jsOp.division),
        "=": new list("original", shemeOp_to_jsOp.equal),
        "!": new list("original", shemeOp_to_jsOp.reverse),
        ">": new list("original", shemeOp_to_jsOp.greater),
        "<": new list("original", shemeOp_to_jsOp.less),
        "!=": new list("original", shemeOp_to_jsOp.not_equal),
        "remainder": new list("original", shemeOp_to_jsOp.remainder),
        "cons": new list("original", shemeOp_to_jsOp.cons_scheme),
        "car": new list("original", shemeOp_to_jsOp.car_scheme),
        "cdr": new list("original", shemeOp_to_jsOp.cdr_scheme),
        "display": new list("original", shemeOp_to_jsOp.display),
        "json": new list("original", shemeOp_to_jsOp.json),
        "list": new list("original", shemeOp_to_jsOp.list),
        "nullList": new list("original", shemeOp_to_jsOp.nullList),
        /*"true": true,
         "false": false,
         "else": true, */
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


