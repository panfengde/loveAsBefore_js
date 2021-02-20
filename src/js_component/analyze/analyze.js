
import list from '../list/index'
import cons from '../cons/index'
import frame from '../frame/index'
import analyze_entry from './index'
import run_eval from '../run_eval/index'
import tools from './tools.js'
import global_env from '../inital_env/index.js';
import { is_cdr_list, is_car_list, is_list } from "../../utils/tools"

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
            return code_op.replace(/^\"|\"$/g, "")
        }
    }

    static variable(code_op) {
        return function (env) {
            //console.log(env)
            return env.look_variable_env(code_op)
        }
    }

    static quote(code_op) {
        return function (env) {
            return code_op.cdr.car
        }
    }

    static set(code_op) {
        let name = code_op.cdr.car;
        let value = analyze_entry(code_op.cdr.cdr.car);
        return function (env) {
            env.set_variable_value_env(name, value(env))
        }
    }

    static define(code_op) {
        if (is_list(code_op.cdr.car)) {
            //(define (hello a x ..) (....))
            let name = code_op.cdr.car.car;
            let args = code_op.cdr.car.cdr;
            let body = code_op.cdr.cdr;
            let _lambda = analyze._make_lambda(args, body)
            //console.log(_lambda)
            let ananlyzed_body = analyze_entry(_lambda)
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
                return env.user_insert_var_value(name, value(env))
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
        var false_action = code_op.cdr.cdr.cdr;

        //if (code_op.cdr.cdr.cdr == "()") {
        if (false_action) {
            false_action = function (env) {
                console.error("使用的if缺少否定运行");
                throw SyntaxError();
                return false;
            }
        } else {
            false_action = analyze_entry(false_action);
        }
        return function (env) {
            if (prediction(env)) {
                return true_action(env)
            } else {
                return false_action(env)
            }
        }
    }

    static _let(code_op) {
        let arg_partment = code_op.cdr.car
        let body_sequence = code_op.cdr.cdr
        /* console.log(arg_partment)
        console.log(body_sequence) */
        let args_name = arg_partment.map((arg_exp_cons) => (arg_exp_cons.car))
        let args_value = arg_partment.map((arg_exp_cons) => (arg_exp_cons.cdr.car))

        let _lambda = analyze._make_lambda(args_name, body_sequence)
        let let_to_lambda = new cons(_lambda, args_value)
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
        let body = code_op.cdr.cdr.car;
        let ananlyzed_body = this._sequences_analyze(body)
        return function (env) {
            return new list("compound", args, ananlyzed_body, env)
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
                console.log("params__", params)
                console.log("vargs__", var_args)

                if (params_args_match(var_args, params)) {
                    return this_condition
                } else {
                    return find_conditon(params, rest_condition)
                }
            }
        }



        function params_args_match(var_args, params) {
            if (is_list(var_args) && is_list(params)) {
                if (var_args.last_items().car == "...") {
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
            } else if (var_args.car == "...") {
                return true
            } else {
                return (typeof params) !== "undefined"
            }

        }



        /* function _replace(vars, template, params) {
            //console.log("变量————",vars)
            function loop_template(rest_template) {
                function iteration(rest_template, temp_result = new list()) {
                    if (is_car_list(rest_template)) {
                        let _temp = iteration(rest_template.car);
                        temp_result.push(_temp);
                    } else if (rest_template.car == "...") {
                        let __temp = loop_vars(rest_template.car, vars, params);
                        console.log(rest_template.show, vars.show, params.show)
                        console.log(__temp.show)
                        temp_result = add(temp_result, __temp)

                    } else {
                        let __temp2 = loop_vars(rest_template.car, vars, params)
                        temp_result = add(temp_result, __temp2)
                    }

                    if (is_cdr_list(rest_template)) {
                        return iteration(rest_template.cdr, temp_result)
                    } else {
                        return temp_result
                    }
                }

                return iteration(rest_template)
            }


            function loop_vars(word, vars, params) {
                //word模板中的该单词,
                //vars,模板中变量
                //params，实参

                if (!is_list(vars)) {
                    //都找完了，还没找到
                    return new cons("word", word)
                } else if (is_car_list(vars)) {
                    let result_word = loop_vars(word, vars.car, params.car)
                    if (result_word.car == "word" && result_word.cdr != word) {
                        //不相同，就代表一定找到了。
                        return new cons("word", result_word.cdr)
                    } else {
                        return loop_vars(word, vars.cdr, params.cdr)
                    }
                } else if (word == vars.car) {
                    if (word == "...") {
                        vars.set_car(Math.random())
                        //param为空的时候！！！！！！！！
                        //这里应该有bug
                        //console.log("paramsparamsparamsparamsparamsparams",params)
                        if (params && is_list(params.car)) {

                            return new cons("...", new list(params.car))
                        } else if (params && params.car) {
                            return new cons("word", params.car)
                        } else {
                            //return new cons("none", new list())
                            return new cons("none", null)
                        }
                    } else {
                        //return params.car
                        return new cons("word", params.car)
                    }

                } else {
                    if (is_list(vars) && is_list(params)) {
                        return loop_vars(word, vars.cdr, params.cdr)
                    } else {
                        return new cons("none", word)
                    }
                }
            }

            return loop_template(template)
        } */

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

                // VARS (_ ((p1 v1) (p2 v2) ...) b ...)
                // params (let* ((a 1)(b a)) (+ a 1) (+ a b) )

                //return new cons("word", word)

                if (!is_list(vars)) {
                    if (word == vars) {
                        if (word === "...") {
                            if (is_list(params)) {
                                return new cons("...", new list(params))
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
                            return new cons("word", params)
                        }
                    } else {
                        return new cons("no_find", word)
                    }
                } else {
                    if (is_list(vars.car)) {
                        let temp = loop_word(word, vars.car, params.car)
                        if (temp.car !== "no_find") {
                            if (vars.car == "...") {
                                //将用过的...替换为其他
                                vars.car = Math.random();
                            }
                            return temp
                        } else {
                            return loop_word(word, vars.cdr, params.cdr)
                        }
                    } else {

                        if (word == vars.car) {
                            if (word === "...") {
                                if (is_list(params)) {
                                    return new cons("...", new list(params))
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
                                return new cons("word", params)
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
                console.log("condition-------")
                console.log(conditions_list)
                console.log(params)
                console.log("condition-------", condition)
                throw SyntaxError("错误")
            }
            console.log("找到的宏-------", condition)
            // console.log("lengthlength", params.length())
            let template = condition.cdr.car
            let vars = condition.car.cdr

            let cloneVars = vars.getClone();

            console.log("宏的实际参数", params)
            console.log("宏的虚拟参数", vars.getClone())
            let result = replace(cloneVars, template, params)
            console.log("宏替换结果-------", result)
            return result
        }

        return replaced_macro(macro_conditions, macro_params)
    }

    static app(code_op) {
        //console.log(code_op)
        let operate = analyze_entry(code_op.car)
        if (is_list(code_op.cdr)) {
            return function (env) {
                let true_operate = operate(env)
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
            let operands = analyze_entry(code_op.cdr)
            return function (env) {
                return eval_app(
                    operate(env),
                    operands(env),
                    code_op,
                    env
                )
            }
        }
    }

    //序列的分析
    static _sequences_analyze(sequences) {
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
        return new list("lambda", args, body)
    }
}


function eval_app(operate, operands, exp, exp_env) {
    switch (operate.car) {
        case "original":
            let operate_fun = operate.cdr.car
            return operate_fun(...tools.list_to_array(operands))
        case "compound":
            //list("compound", args, ananlyzed_body, env)
            let args = tools.list_to_array(operate.cdr.car) //形式参数
            let params = tools.list_to_array(operands) //实际参数
            /* console.log("形式参数", args)
            console.log("实际参数", operands) */
            let ananlyzed_body = operate.cdr.cdr.car //被分析后的过程
            let env = operate.cdr.cdr.cdr.car //过程的定义环境
            let function_env = new frame(args, params) //形参和实参构成的框架
            function_env.extend_env(env) //将过程的定义框架，链接入过程定义的环境中
            return ananlyzed_body(function_env)
        case "macro":
            let macro_params = exp.cdr
            let rule_list = operate.cdr.car

            //console.log(rule_list.show, macro_params.show)
            let marco_replace_result = analyze.parse_macro(rule_list, macro_params)
            console.log("宏----", marco_replace_result)
            return run_eval(marco_replace_result, exp_env)
        default:
            console.error("错误的操作符", operate)
    }
}


export default analyze