function judge_arr_exist(obj, key) {
    return (obj instanceof Object) && obj.hasOwnProperty(key)
}


function is_list(obj) {
    //数据结构导致，cdr存在时，它的数据类型就是list
    return obj.type == "list";
}

function is_cdr_list(obj, key) {
    //数据结构导致，cdr存在时，它的数据类型就是list
    if (judge_arr_exist(obj, "cdr") && obj.cdr.type !== "list") {
        console.error("cdr数据结构错误", obj)
    }

    return judge_arr_exist(obj, "cdr")

}

function is_car_list_cons_json(obj, key) {
    return judge_arr_exist(obj, "car") && (obj.car.type == "list" || obj.car.type == "cons" || obj.car.type == "json")
}


/* function global_iter(judge_exp, true_callback, false_callback, true_param_get, false_param_get, obj,) {
    //要尾递归优化！！！！
    //要尾递归优化！！！！
    //要尾递归优化！！！！
    //要尾递归优化！！！！
    //要尾递归优化！！！！
    //要尾递归优化！！！！
    
    if (judge_exp(obj)) {
        true_callback(obj)
        global_iter(judge_exptrue_iter_param_get(obj))
    } else {
        length = length + 1;
    }
} */

export { judge_arr_exist, is_cdr_list, is_car_list_cons_json, is_list }