
import frame from '../frame/index'
import analyze_entry from './index'
import run_eval from '../run_eval/index'
import tools from './tools.js'
import global_env from '../inital_env/index.js';
import { base, _number, _string, _boolean, lambdaBase, _class, cons, list, json, _null } from './types/index'
import { is_cdr_list, is_car_list, is_list } from "../../utils/tools"


let null_list = new list()

/**
 *表达式的操作符所对应的分析和操作逻辑
 */
class analyze {
    static number(code_op) {
        return function (env) {
            return code_op
        }
    }

    static string(code_op) {
        return function (env) {
            return code_op
            //return code_op.replace(/^\"|\"$/g, "")
        }
    }
    static boolean(code_op) {
        return function (env) {
            return code_op
        }
    }

    static null(code_op) {
        return function (env) {
            return code_op
        }
    }

    static variable(code_op) {
        return function (env) {
            let result = env.look_variable_env(code_op)
            if (result[0]) {
                return result[1]
            } else {
                return new _null()
            }

        }
    }

    static getArr(code_op) {
        //获取对象,json,lis的属性或值
        //(. jsons "hello")
        //(. list "hello")
        //(. Number "hello")
        //(. class "hello")
        //console.log("code_op",code_op)
        let obj = analyze_entry(code_op.cdr.car);
        let arr = analyze_entry(code_op.cdr.cdr.car);

        return function (env) {
            let true_obj = obj(env)
            let true_arr = arr(env).value
            // console.log("true_obj",true_obj)
            // console.log("true_arr", true_arr)
            if (true_obj.type == "frame") {
                let result = true_obj.look_variable_env(true_arr)
                if (result[0]) {
                    if (is_list(result[1]) && result[1].car == "compound") {
                        result[1].cdr.car = result[1].cdr.car.call(true_obj);
                        return result[1]
                    } else {
                        return result[1];
                    }
                } else {
                    return new _null()
                }
            } else {
                //调用类的原生方法
                /**
                 * 对于原生的方法，可能传递回调函数进去运行
                 * 所以这里将参数，环境，运行接口都传进去，让回调函数使
                 * 可能有很多问题的
                 * @params 参数 @env 环境 @eval_app 运行入口
                 */
                //console.log("__" + true_arr)
                return new list("original", (params,) => { return true_obj["__" + true_arr](params, env, eval_app) });
            }
            //return env.look_variable_env(code_op)
        }
    }

    static quote(code_op) {
        //console.log(code_op);
        return function (env) {
            return code_op.cdr.car
        }
    }

    static set(code_op) {
        //(set! a 10)
        //let name = code_op.cdr.car;
        let setObj = code_op.cdr.car
        let value = analyze_entry(code_op.cdr.cdr.car);
        if (is_list(setObj)) {
            return function (env) {
                let frame = analyze_entry(setObj.car)(env);
                let name = analyze_entry(setObj.cdr.car)(env).value;
                let result = frame.look_variable_env(name)
                //console.log(value(env))
                if (result[0]) {
                    result[1].value = value(env).value
                } else {
                    //console.log(frame)
                    frame.user_insert_var_value(name, value(env))
                }
            }
        } else {
            //let name = analyze_entry(setObj);
            return function (env) {
                env.set_variable_value_env(setObj, value(env))
            }
        }
    }

    static define(code_op) {
        if (is_list(code_op.cdr.car)) {
            //(define (hello a x ..) (....))
            let name = code_op.cdr.car.car;
            let args = code_op.cdr.car.cdr;
            let body = code_op.cdr.cdr;
            let _lambda = analyze._make_lambda(args, body);
            //console.log(_lambda)
            let ananlyzed_body = analyze_entry(_lambda);
            return function (env) {
                return env.user_insert_var_value(
                    name,
                    ananlyzed_body(env)
                )
            }
        } else {
            //(define a 1)
            let name = code_op.cdr.car;
            let value = analyze_entry(code_op.cdr.cdr.car);
            return function (env) {
                return env.user_insert_var_value(name, value(env));
            }
        }
    }

    static begin(code_op) {
        if (!is_cdr_list(code_op)) {
            console.error("begin语句错误");
            throw SyntaxError();
        } else {
            return this._sequences_analyze(code_op.cdr);
        }
    }

    static _if(code_op) {
        let prediction = analyze_entry(code_op.cdr.car);
        let true_action = analyze_entry(code_op.cdr.cdr.car);
        var false_action = code_op.cdr.cdr.cdr ? code_op.cdr.cdr.cdr.car : new list("quote", "()")
        //if (code_op.cdr.cdr.cdr == "()") {
        //console.log(false_action)
        /* if (typeof false_action == "undefined") {
            false_action = function (env) {

                console.error("使用的if缺少否定运行");
                throw SyntaxError();
                return false;
            }
        } else {
            false_action = analyze_entry(false_action);
        } */
        false_action = analyze_entry(false_action);
        return function (env) {
            if (prediction(env).value) {
                return true_action(env)
            } else {
                return false_action(env)
            }
        }
    }

    static _let(code_op) {
        let arg_partment = code_op.cdr.car
        let body_sequence = code_op.cdr.cdr
        let args_name = arg_partment.map((arg_exp_cons) => (arg_exp_cons.car))
        let args_value = arg_partment.map((arg_exp_cons) => (arg_exp_cons.cdr.car))

        let _lambda = analyze._make_lambda(args_name, body_sequence)
        let let_to_lambda = new list(_lambda).concat(args_value)
        //((lambda (a b) (+ a b) ) 1 2)
        let parsed_let = analyze_entry(let_to_lambda)
        return function (env) {
            return parsed_let(env)
        }
    }

    static cons(code_op) {
        // (cons a b)
        let car_data = analyze_entry(code_op.cdr.car)
        let cdr_data = analyze_entry(code_op.cdr.cdr.car)
        return function (env) {
            return new cons(car_data(env), cdr_data(env))
        }
    }

    static lambda(code_op) {
        // (lambda (xxx) (saf)(asdf))
        let args = code_op.cdr.car;
        let body = code_op.cdr.cdr;
        //let body = code_op.cdr.cdr.car;

        let ananlyzed_body = this._sequences_analyze(body)
        return function (env) {
            return new list("compound", new lambdaBase(args, ananlyzed_body, env))
        }
    }

    static _class(code_op) {
        let name = code_op.cdr.car
        let constructor = code_op.cdr.cdr.car
        let constructor_args = constructor.cdr.car
        let constructor_body = constructor.cdr.cdr
        constructor_body.push("this")
        let methods = code_op.cdr.cdr.cdr
        let ananlyzed_methods = this._sequences_analyze(methods)
        //分析方法并插入作用域中
        let ananlyzed_constructor_body = this._sequences_analyze(constructor_body)
        return function (env) {
            //这个域用来存储公用的方法
            let new_env = new frame() //形参和实参构成的框架
            new_env.extend_env(env)

            new_env.user_insert_var_value("this", new_env);
            //挂载类的方法
            ananlyzed_methods(new_env)
            //console.log("new_envnew_envnew_envnew_env",new_env)
            let constructor_class = new _class(constructor_args, ananlyzed_constructor_body, new_env);
            return env.user_insert_var_value(name,
                new list("compound", constructor_class)
            )
        }
    }

    static defineSyntax(code_op) {

        /*
        (define-syntax nil!
            (syntax-rules ()
              ((_ x)(set! x '()))
              ((_ x a)(set! x a))
            )
        )
        */
        let syntax_body = code_op.cdr.cdr.car
        let syntax_name = code_op.cdr.car
        //可以提前分析好宏得每一种情况
        let rule_list = syntax_body.cdr.cdr
        if (syntax_body.car == "syntax-rules") {
            return function (env) {
                return global_env.user_insert_var_value(
                    syntax_name,
                    new list("macro", rule_list)
                )
            }
        } else {
            console.error("宏的定义需要syntax-rules")
            throw SyntaxError();
        }
    }

    static parse_macro(macro_conditions, macro_params) {
        /**
         *
         * @param {*} params 实参，是一个cons结构
         * @param {*} conditions  宏模板列表
         */
        function find_conditon(params, conditions) {
            if (conditions) {
                let this_condition = conditions.car
                let rest_condition = conditions.cdr
                let var_args = this_condition.car.cdr
                //console.log("params__", params)
                //console.log("vargs__", var_args)
                if (params_args_match(var_args, params)) {
                    return this_condition
                } else {
                    return find_conditon(params, rest_condition)
                }
            }
        }

        function params_args_match(var_args, params) {
            if (is_list(var_args) && is_list(params)) {
                let _temp = var_args.last_items()
                //console.log(_temp)
                if (_temp && _temp.car && _temp.car.substr && _temp.car.substr(0, 3) == "...") {
                    if (params.length() >= (var_args.length() - 1)) {
                        return true && params_args_match(var_args.car, params.car) && params_args_match(var_args.car, params.car)
                    } else {
                        return false
                    }
                } else {
                    if (params.length() == var_args.length()) {
                        return true && params_args_match(var_args.car, params.car) && params_args_match(var_args.car, params.car)
                    } else {
                        return false
                    }
                }
            } else if (var_args && var_args.car && var_args.car.substr(0, 3) == "...") {
                return true
            } else {
                return (typeof params) !== "undefined"
            }

        }

        function replace(vars, template, params) {

            function add(origin, get_cons) {

                //console.log("宿主", origin.show)
                if (get_cons.car) {
                    if (get_cons.car == "...") {
                        origin.concat(get_cons.cdr)
                    } else if (get_cons.car == "word" || get_cons.car == "no_find") {
                        origin.push(get_cons.cdr)
                    } else if (get_cons.car == "none") {

                    }
                }
                /* console.log("宿主", origin.show)
                console.log("要拼接的", get_cons.show)
                console.log("拼接结果", origin.show) */

                return origin

            }

            function loop_template(template, result = new list()) {

                //console.log("loop_template", result.show)
                //debugger
                // console.log("template", template && template.show)
                if (!is_list(template)) {
                    //当走到底时
                    if ((typeof template) == "undefined") {
                        //console.log("走到头", result.show)
                    } else {

                        add(result, loop_word(template, vars, params));
                    }

                } else {
                    if (is_car_list(template)) {
                        result.push(loop_template(template.car))
                        loop_template(template.cdr, result)


                    } else {

                        add(result, loop_word(template.car, vars, params))
                        //console.log(result)
                        loop_template(template.cdr, result)
                    }
                }
                return result
            }

            function loop_word(word, vars, params) {
                //word一定不会是undefined
                // return new cons("word", word)
                // VARS (_ ((p1 v1) (p2 v2) ...) b ...)
                // params (let* ((a 1)(b a)) (+ a 1) (+ a b) )

                //return new co console.log()
                if (!is_list(vars)) {
                    //迭代完全了
                    //return new cons("no_find", word)
                    return new cons("no_find", word)


                } else {
                    if (is_list(vars.car)) {
                        let temp = loop_word(word, vars.car, params.car);

                        if (temp.car == "no_find") {
                            return loop_word(word, vars.cdr, params.cdr)
                        } else {
                            return temp
                        }
                    } else {
                        if (word == vars.car) {
                            if (word.substr(0, 3) == "...") {
                                //vars.car = Math.random();
                                if (is_list(params)) {
                                    //console.log(".......................................", params)
                                    return new cons("...", params)
                                } else {
                                    if (typeof params == "undefined") {
                                        //特殊情况，...对应空
                                        //可能会有问题
                                        return new cons("none", null)
                                    } else {
                                        return new cons("word", params)
                                    }
                                }
                            } else {
                                if (is_list(params)) {
                                    return new cons("word", params.car)
                                } else {
                                    if (typeof params == "undefined") {
                                        //特殊情况，...对应空
                                        //可能会有问题
                                        return new cons("none", null)
                                    } else {
                                        return new cons("word", params.car)
                                    }
                                }
                            }
                        } else {
                            if ((typeof params) == "undefined") {
                                return new cons("no_find", word)
                            } else {
                                return loop_word(word, vars.cdr, params.cdr)
                            }

                        }

                    }
                }
            }



            return loop_template(template);

        }

        function replaced_macro(conditions_list, params) {

            let condition = find_conditon(params, conditions_list)
            if (!is_list(condition)) {

                throw SyntaxError("错误")
            }
            //console.log("找到的宏-------", condition)
            // console.log("lengthlength", params.length())
            let template = condition.cdr.car
            let vars = condition.car.cdr

            let cloneVars = vars.getClone();


            let result = replace(cloneVars, template, params)
            //console.log("宏替换结果-------", result)
            return result
        }

        return replaced_macro(macro_conditions, macro_params)
    }

    static app(code_op) {
        let operate = analyze_entry(code_op.car)
        if (is_cdr_list(code_op)) {
            return function (env) {
                let true_operate = operate(env)
                //console.log("****",code_op, true_operate)
                if (true_operate.car == "macro") {
                    return eval_app(
                        true_operate,
                        [],
                        code_op,
                        env
                    )
                } else {
                    //需要确认操作不是宏的时候，再去执行参数分析，不然会错误
                    //原来，是将参数的分析，放在外面，导致宏参数分析报错
                    //let operands = code_op.cdr ? code_op.cdr.map(analyze_entry) : new list()
                    let operands = code_op.cdr.map(analyze_entry)
                    return eval_app(
                        true_operate,
                        operands.map((operand_fun) => {
                            return operand_fun(env)
                        }),
                        code_op,
                        env
                    )
                }
            }
        } else {
            return function (env) {
                let true_operate = operate(env)
                //console.log("app****app****app", code_op, true_operate)
                return eval_app(
                    true_operate,
                    null_list,
                    code_op,
                    env
                )
            }
        }
    }

    //序列的分析
    static _sequences_analyze(sequences) {
        //console.log("sequences",sequences)
        function seqeunces_analyze(first, second) {
            return function (env) {
                first(env)
                return second(env)
            }
        }

        function loop(first_producer, rest_producers) {
            if (is_list(rest_producers)) {
                return loop(seqeunces_analyze(first_producer, rest_producers.car), rest_producers.cdr)
            } else {
                return first_producer
            }
        }

        if (!is_list(sequences)) {
            console.error("begin语句错误", sequences)
            throw SyntaxError();
        } else {
            let analyzed_sequences = sequences.map(analyze_entry)
            return loop(analyzed_sequences.car, analyzed_sequences.cdr)
        }
    }

    static _make_lambda(args, body) {
        return new list("lambda", args).concat(body)
    }
}


function eval_app(operate, operands, exp, exp_env) {
    //console.log("xxxxxxxxx",exp)
    switch (operate.car) {
        case "original":
            let operate_fun = operate.cdr.car
            //return operate_fun(...tools.list_to_array(operands))
            return operate_fun(...tools.list_to_array(operands))
        case "compound":
            let the_function = operate.cdr.car;//实例化的获取函数对象
            //list("compound", args, ananlyzed_body, env)
            let args = tools.list_to_array(the_function.args) //形式参数
            let params = tools.list_to_array(operands) //实际参数
            /* console.log("形式参数", args)
            console.log("实际参数", operands) */
            let ananlyzed_body = the_function.ananlyzed_body //被分析后的过程
            let define_env = the_function.define_env //过程的定义环境
            let function_env = new frame(args, params) //形参和实参构成的框架
            if (the_function.type === "class") {
                let class_example_env = new frame();
                class_example_env.extend_env(define_env)
                class_example_env.user_insert_var_value("this", class_example_env);
                //形参和实参构成的框架
                function_env.extend_env(class_example_env) //将过程的定义框架，链接入过程定义的环境中
            } else {
                function_env.extend_env(define_env) //将过程的定义框架，链接入过程定义的环境中
                function_env.user_insert_var_value("this", function_env);
            }

            return ananlyzed_body(function_env);
        case "macro":
            let macro_params = exp.cdr
            let rule_list = operate.cdr.car

            let marco_replace_result = analyze.parse_macro(rule_list, macro_params)
            //console.log("宏替换结果", marco_replace_result)
            return run_eval(marco_replace_result, exp_env)
        default:
            console.error("错误的操作符", operate)
    }
}


export default analyze