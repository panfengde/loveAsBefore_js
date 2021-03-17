import parse_txt from './parse_txt/index.js';
import Parse from './parse_exp/index.js';
import global_env from './inital_env/index.js';
import Compiler from './Compiler/index.js';

import { eval_app } from './analyze/compilerAnalyze'
import { base, _number, _string, _boolean, lambdaBase, _class, cons, list, json, _null, _undefined } from './analyze/types/index'

import { classFrame, frame } from "./frame/index.js"
import { is_cdr_list, is_car_list, is_list, is_json, is_frame } from "../utils/tools"
let null_list = new list()

console.time("编译代码运行时间");
//--------------
(function (env) {
    return "ok"
})(global_env);(function (env) {
//这个域用来存储公用的方法
let new_env = new classFrame(); //类的定义环境
new_env.extend_env(env);

let class_env = new classFrame()
class_env.extend_env(env); //存储类的公用方法

new_env.insert_key_value("_classMethods", class_env);
// this只能指向对象
//动态改变this的指向
//挂载类的方法
(function (env) {
    return env.insert_key_value(
        "a",
        (function (env) {
let ananlyzed_body=function (env) {
        let operands=list.parseLiteral([function (env) {
let true_obj = (function (env) {
let result = env.look_variable_env("this")
if (result) {
    return result
} else {
    return new _null()
}
})(env)
let true_arr = (function (env) {
return new _string("color")
})(env).value
// console.log("true_obj",true_obj)
// console.log("true_arr", true_arr)
if (true_obj.type == "undefined") {
    throw SyntaxError("不能get undefined 的属性")
}
if (true_obj.type == "classFrame") {
    let result = true_obj.look_variable_class_env(true_arr)
    if (result) {
        if (is_list(result) && result.car == "compound") {
            //传入函数执行时，所挂载的对象，动态改变this
            //return new list("compound", result.cdr.car.call(true_obj))
            result.cdr.car = result.cdr.car.call(true_obj);
            return result
        } else {
            return result;
        }
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else if (true_obj.type == "json") {
    let result = true_obj.get_value_by_key(true_arr)
    if (result) {
        return result
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else {
    //调用类的原生方法
    /**
     * 对于原生的方法，可能传递回调函数进去运行
     * 所以这里将参数，环境，运行接口都传进去，让回调函数使
     * 可能有很多问题的
     * @params 参数 @env 环境 @eval_app 运行入口
     */
    /* console.log("__" + true_arr)
    console.log(true_obj) */
    return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
}
//return env.look_variable_env(code_op)
},function (env) {
let result = env.look_variable_env("x")
if (result) {
    return result
} else {
    return new _null()
}
},function (env) {
return new _string("okokokokok??????????")
}]);
        let true_operate = (function (env) {
let result = env.look_variable_env("display")
if (result) {
    return result
} else {
    return new _null()
}
})(env);
        let true_operands=operands.map((operand_fun) => {
            return operand_fun(env)
        });
        return eval_app(
            true_operate,
            true_operands,
        );
    };
let args= list.parseLiteral(["x"]);
return new list("compound", new lambdaBase(args, ananlyzed_body, env));
})(env)
    )
})(class_env);
//console.log("new_envnew_envnew_envnew_env",new_env);
let ananlyzed_constructor_body=function (env) {
    (function (env) {
    (function (env) {
    let trueObj = (function (env) {
let true_obj = (function (env) {
let result = env.look_variable_env("this")
if (result) {
    return result
} else {
    return new _null()
}
})(env)
let true_arr = (function (env) {
return new _string("color")
})(env).value
// console.log("true_obj",true_obj)
// console.log("true_arr", true_arr)
if (true_obj.type == "undefined") {
    throw SyntaxError("不能get undefined 的属性")
}
if (true_obj.type == "classFrame") {
    let result = true_obj.look_variable_class_env(true_arr)
    if (result) {
        if (is_list(result) && result.car == "compound") {
            //传入函数执行时，所挂载的对象，动态改变this
            //return new list("compound", result.cdr.car.call(true_obj))
            result.cdr.car = result.cdr.car.call(true_obj);
            return result
        } else {
            return result;
        }
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else if (true_obj.type == "json") {
    let result = true_obj.get_value_by_key(true_arr)
    if (result) {
        return result
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else {
    //调用类的原生方法
    /**
     * 对于原生的方法，可能传递回调函数进去运行
     * 所以这里将参数，环境，运行接口都传进去，让回调函数使
     * 可能有很多问题的
     * @params 参数 @env 环境 @eval_app 运行入口
     */
    /* console.log("__" + true_arr)
    console.log(true_obj) */
    return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
}
//return env.look_variable_env(code_op)
})(env);
    let trueValue = (function (env) {
let result = env.look_variable_env("color_1")
if (result) {
    return result
} else {
    return new _null()
}
})(env);
    if (trueObj.type == "undefined") {
        trueValue = base.clone(trueValue)
        trueObj.father.insert_key_value(trueObj.arr, trueValue)
    } else {
        Reflect.ownKeys(trueObj).forEach((key) => {
            delete trueObj[key]
        })
        Reflect.ownKeys(trueValue).forEach((key) => {
            trueObj[key] = trueValue[key]
        })
        trueObj.__proto__ = trueValue.__proto__
    }
})(env);
    return (function (env) {
    let trueObj = (function (env) {
let true_obj = (function (env) {
let result = env.look_variable_env("this")
if (result) {
    return result
} else {
    return new _null()
}
})(env)
let true_arr = (function (env) {
return new _string("wheel")
})(env).value
// console.log("true_obj",true_obj)
// console.log("true_arr", true_arr)
if (true_obj.type == "undefined") {
    throw SyntaxError("不能get undefined 的属性")
}
if (true_obj.type == "classFrame") {
    let result = true_obj.look_variable_class_env(true_arr)
    if (result) {
        if (is_list(result) && result.car == "compound") {
            //传入函数执行时，所挂载的对象，动态改变this
            //return new list("compound", result.cdr.car.call(true_obj))
            result.cdr.car = result.cdr.car.call(true_obj);
            return result
        } else {
            return result;
        }
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else if (true_obj.type == "json") {
    let result = true_obj.get_value_by_key(true_arr)
    if (result) {
        return result
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else {
    //调用类的原生方法
    /**
     * 对于原生的方法，可能传递回调函数进去运行
     * 所以这里将参数，环境，运行接口都传进去，让回调函数使
     * 可能有很多问题的
     * @params 参数 @env 环境 @eval_app 运行入口
     */
    /* console.log("__" + true_arr)
    console.log(true_obj) */
    return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
}
//return env.look_variable_env(code_op)
})(env);
    let trueValue = (function (env) {
let result = env.look_variable_env("wheel_1")
if (result) {
    return result
} else {
    return new _null()
}
})(env);
    if (trueObj.type == "undefined") {
        trueValue = base.clone(trueValue)
        trueObj.father.insert_key_value(trueObj.arr, trueValue)
    } else {
        Reflect.ownKeys(trueObj).forEach((key) => {
            delete trueObj[key]
        })
        Reflect.ownKeys(trueValue).forEach((key) => {
            trueObj[key] = trueValue[key]
        })
        trueObj.__proto__ = trueValue.__proto__
    }
})(env);
})(env);
    return (function (env) {
let result = env.look_variable_env("this")
if (result) {
    return result
} else {
    return new _null()
}
})(env);
};
let constructor_args=list.parseLiteral(["color_1","wheel_1"])
let constructor_class = new _class(constructor_args, ananlyzed_constructor_body, new_env);
return env.insert_key_value("animal",
    new list("class", constructor_class)
)

})(global_env);(function (env) {
    let trueValue = (function (env) {
return (function (env) {
        let operands=list.parseLiteral([function (env) {
return new _string("aaa")
},function (env) {
return new _number(11111)
}]);
        let true_operate = (function (env) {
let result = env.look_variable_env("animal")
if (result) {
    return result
} else {
    return new _null()
}
})(env);
        let true_operands=operands.map((operand_fun) => {
            return operand_fun(env)
        });
        return eval_app(
            true_operate,
            true_operands,
        );
    })(env)
})(env)
    return env.insert_key_value("one", base.clone(trueValue));
})(global_env);(function (env) {
        let operands=list.parseLiteral([function (env) {
let true_obj = (function (env) {
let result = env.look_variable_env("one")
if (result) {
    return result
} else {
    return new _null()
}
})(env)
let true_arr = (function (env) {
return new _string("color")
})(env).value
// console.log("true_obj",true_obj)
// console.log("true_arr", true_arr)
if (true_obj.type == "undefined") {
    throw SyntaxError("不能get undefined 的属性")
}
if (true_obj.type == "classFrame") {
    let result = true_obj.look_variable_class_env(true_arr)
    if (result) {
        if (is_list(result) && result.car == "compound") {
            //传入函数执行时，所挂载的对象，动态改变this
            //return new list("compound", result.cdr.car.call(true_obj))
            result.cdr.car = result.cdr.car.call(true_obj);
            return result
        } else {
            return result;
        }
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else if (true_obj.type == "json") {
    let result = true_obj.get_value_by_key(true_arr)
    if (result) {
        return result
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else {
    //调用类的原生方法
    /**
     * 对于原生的方法，可能传递回调函数进去运行
     * 所以这里将参数，环境，运行接口都传进去，让回调函数使
     * 可能有很多问题的
     * @params 参数 @env 环境 @eval_app 运行入口
     */
    /* console.log("__" + true_arr)
    console.log(true_obj) */
    return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
}
//return env.look_variable_env(code_op)
}]);
        let true_operate = (function (env) {
let result = env.look_variable_env("display")
if (result) {
    return result
} else {
    return new _null()
}
})(env);
        let true_operands=operands.map((operand_fun) => {
            return operand_fun(env)
        });
        return eval_app(
            true_operate,
            true_operands,
        );
    })(global_env);(function (env) {
        let operands=list.parseLiteral([function (env) {
let true_obj = (function (env) {
let result = env.look_variable_env("one")
if (result) {
    return result
} else {
    return new _null()
}
})(env)
let true_arr = (function (env) {
return new _string("wheel")
})(env).value
// console.log("true_obj",true_obj)
// console.log("true_arr", true_arr)
if (true_obj.type == "undefined") {
    throw SyntaxError("不能get undefined 的属性")
}
if (true_obj.type == "classFrame") {
    let result = true_obj.look_variable_class_env(true_arr)
    if (result) {
        if (is_list(result) && result.car == "compound") {
            //传入函数执行时，所挂载的对象，动态改变this
            //return new list("compound", result.cdr.car.call(true_obj))
            result.cdr.car = result.cdr.car.call(true_obj);
            return result
        } else {
            return result;
        }
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else if (true_obj.type == "json") {
    let result = true_obj.get_value_by_key(true_arr)
    if (result) {
        return result
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else {
    //调用类的原生方法
    /**
     * 对于原生的方法，可能传递回调函数进去运行
     * 所以这里将参数，环境，运行接口都传进去，让回调函数使
     * 可能有很多问题的
     * @params 参数 @env 环境 @eval_app 运行入口
     */
    /* console.log("__" + true_arr)
    console.log(true_obj) */
    return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
}
//return env.look_variable_env(code_op)
}]);
        let true_operate = (function (env) {
let result = env.look_variable_env("display")
if (result) {
    return result
} else {
    return new _null()
}
})(env);
        let true_operands=operands.map((operand_fun) => {
            return operand_fun(env)
        });
        return eval_app(
            true_operate,
            true_operands,
        );
    })(global_env);(function (env) {
    let trueObj = (function (env) {
let true_obj = (function (env) {
let result = env.look_variable_env("one")
if (result) {
    return result
} else {
    return new _null()
}
})(env)
let true_arr = (function (env) {
return new _string("color")
})(env).value
// console.log("true_obj",true_obj)
// console.log("true_arr", true_arr)
if (true_obj.type == "undefined") {
    throw SyntaxError("不能get undefined 的属性")
}
if (true_obj.type == "classFrame") {
    let result = true_obj.look_variable_class_env(true_arr)
    if (result) {
        if (is_list(result) && result.car == "compound") {
            //传入函数执行时，所挂载的对象，动态改变this
            //return new list("compound", result.cdr.car.call(true_obj))
            result.cdr.car = result.cdr.car.call(true_obj);
            return result
        } else {
            return result;
        }
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else if (true_obj.type == "json") {
    let result = true_obj.get_value_by_key(true_arr)
    if (result) {
        return result
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else {
    //调用类的原生方法
    /**
     * 对于原生的方法，可能传递回调函数进去运行
     * 所以这里将参数，环境，运行接口都传进去，让回调函数使
     * 可能有很多问题的
     * @params 参数 @env 环境 @eval_app 运行入口
     */
    /* console.log("__" + true_arr)
    console.log(true_obj) */
    return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
}
//return env.look_variable_env(code_op)
})(env);
    let trueValue = (function (env) {
return new _string("?????")
})(env);
    if (trueObj.type == "undefined") {
        trueValue = base.clone(trueValue)
        trueObj.father.insert_key_value(trueObj.arr, trueValue)
    } else {
        Reflect.ownKeys(trueObj).forEach((key) => {
            delete trueObj[key]
        })
        Reflect.ownKeys(trueValue).forEach((key) => {
            trueObj[key] = trueValue[key]
        })
        trueObj.__proto__ = trueValue.__proto__
    }
})(global_env);(function (env) {
        let operands=list.parseLiteral([function (env) {
let true_obj = (function (env) {
let result = env.look_variable_env("one")
if (result) {
    return result
} else {
    return new _null()
}
})(env)
let true_arr = (function (env) {
return new _string("color")
})(env).value
// console.log("true_obj",true_obj)
// console.log("true_arr", true_arr)
if (true_obj.type == "undefined") {
    throw SyntaxError("不能get undefined 的属性")
}
if (true_obj.type == "classFrame") {
    let result = true_obj.look_variable_class_env(true_arr)
    if (result) {
        if (is_list(result) && result.car == "compound") {
            //传入函数执行时，所挂载的对象，动态改变this
            //return new list("compound", result.cdr.car.call(true_obj))
            result.cdr.car = result.cdr.car.call(true_obj);
            return result
        } else {
            return result;
        }
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else if (true_obj.type == "json") {
    let result = true_obj.get_value_by_key(true_arr)
    if (result) {
        return result
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else {
    //调用类的原生方法
    /**
     * 对于原生的方法，可能传递回调函数进去运行
     * 所以这里将参数，环境，运行接口都传进去，让回调函数使
     * 可能有很多问题的
     * @params 参数 @env 环境 @eval_app 运行入口
     */
    /* console.log("__" + true_arr)
    console.log(true_obj) */
    return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
}
//return env.look_variable_env(code_op)
}]);
        let true_operate = (function (env) {
let result = env.look_variable_env("display")
if (result) {
    return result
} else {
    return new _null()
}
})(env);
        let true_operands=operands.map((operand_fun) => {
            return operand_fun(env)
        });
        return eval_app(
            true_operate,
            true_operands,
        );
    })(global_env);(function (env) {
        let operands=list.parseLiteral([function (env) {
let true_obj = (function (env) {
let result = env.look_variable_env("one")
if (result) {
    return result
} else {
    return new _null()
}
})(env)
let true_arr = (function (env) {
return new _string("wheel")
})(env).value
// console.log("true_obj",true_obj)
// console.log("true_arr", true_arr)
if (true_obj.type == "undefined") {
    throw SyntaxError("不能get undefined 的属性")
}
if (true_obj.type == "classFrame") {
    let result = true_obj.look_variable_class_env(true_arr)
    if (result) {
        if (is_list(result) && result.car == "compound") {
            //传入函数执行时，所挂载的对象，动态改变this
            //return new list("compound", result.cdr.car.call(true_obj))
            result.cdr.car = result.cdr.car.call(true_obj);
            return result
        } else {
            return result;
        }
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else if (true_obj.type == "json") {
    let result = true_obj.get_value_by_key(true_arr)
    if (result) {
        return result
    } else {
        if (("__" + true_arr) in true_obj) {
            //判断是否继承了该方法
            return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
        } else {
            let _undefinedTemp = new _undefined();
            _undefinedTemp.father = true_obj
            _undefinedTemp.arr = true_arr
            return _undefinedTemp;
        }
    }
}
else {
    //调用类的原生方法
    /**
     * 对于原生的方法，可能传递回调函数进去运行
     * 所以这里将参数，环境，运行接口都传进去，让回调函数使
     * 可能有很多问题的
     * @params 参数 @env 环境 @eval_app 运行入口
     */
    /* console.log("__" + true_arr)
    console.log(true_obj) */
    return new list("original", (...params) => { return true_obj["__" + true_arr].call(true_obj, ...params, env, eval_app) });
}
//return env.look_variable_env(code_op)
}]);
        let true_operate = (function (env) {
let result = env.look_variable_env("display")
if (result) {
    return result
} else {
    return new _null()
}
})(env);
        let true_operands=operands.map((operand_fun) => {
            return operand_fun(env)
        });
        return eval_app(
            true_operate,
            true_operands,
        );
    })(global_env);
//--------------
console.timeEnd("编译代码运行时间");
function loveAsBefore(...labCodeFiles) {
    let result = "";
    labCodeFiles.forEach((labCodes) => {
        //strExp_to_List 优化空间非常大
        parse_txt(labCodes).forEach((code) => {
            //console.log(code)
            //console.log(Parse.strExp_to_List(code))
            result += `(${Compiler(Parse.strExp_to_List(code))})(global_env);`
        })
        return result
    })
    console.log(result)

}



export {
    loveAsBefore
}