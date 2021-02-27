'use strict';

import { base, list } from "../analyze/types/index"
let testHandle = false;

function testLog(...txt) {
    if (testHandle) {
        console.log(...txt)
    }
}



class Parse {
    /**
     * 判断字符串是否为括号队包含的
     */
    static jude_pair(code_str) {
        let re = /^\s*\([\s\S]*\S+[\s\S]*\)\s*$/;
        return re.test(code_str);
    }

    static jude_quote(code_str) {
        let re = /^\s*[\r\n]*\s*'\w|^\s*[\r\n]*\s*'\(/;
        return re.test(code_str);
    }

    /**
     * 去除文本首尾的空格和换行符号
     *
     */
    static kill_startEnd_rubbish(txt) {
        testLog("kill_startEnd_rubbish---------", txt)
        return txt.replace(/^\s*[\r\n]*\s*|\s*[\r\n]*\s*$/g, "")
    }

    static quoteHandle(code_str) {
        testLog('quoteHandle-------', code_str)
        if (this.jude_quote(code_str)) {
            code_str = code_str.replace(/^\s*[\r\n]*\s*'/, "")


            let temp = [1]
            let car_over = false
            let car = "("
            let cdr = "";
            for (let i = 1; i < code_str.length; i++) {
                let world = code_str[i];
                if (world == "(") {
                    temp.unshift(1)
                } else if (world == ")") (
                    temp.pop()
                )

                if (!car_over) {
                    car += world
                } else {
                    cdr += world
                }
                if (temp.length == 0 && !car_over) {
                    car_over = true
                }

            }

            return "(quote " + car + ") " + cdr
        } else {
            return code_str
        }
    }

    static doubleQuoteHandle(code_str) {
        if (code_str[0] == "\"") {

        }
    }

    /**
     * 获取括号表达式内的内容--会去掉第一层括号和首尾的垃圾
     * 如果不是括号表达式，就返回去除收尾垃圾的信息（字符串表达式不祛除）
     * 表达式经过了预处理，首位不会有空值和换行符号
     */
    static get_brackets_content(txt) {
        return txt.replace(/^\s*[\r\n]*\(?\s*[\r\n]*\s*|\s*[\r\n]*\s*\)?\s*[\r\n]*\s*$/g, "")
    }

    /**
     *
     * 解析括号表单式，整理为如下格式，便于后面生成List数据结构
     * 这里的解析自动生成了List格式，不需要再用List实例类，
     * {
     * car:'str'
     * cdr:{
     *      car:"str"
     *      cdr:......
     *      }
     * }
     */

    static parse_brackets(code_str) {
        code_str = this.quoteHandle(code_str)

        let exp_str = this.get_brackets_content(code_str)
        testLog("get_brackets_content----", exp_str)
        let car = "";
        let cdr = "";
        let car_over = false
        let doubleFlag_lock = false

        //解决'()这种表达式
        exp_str = this.quoteHandle(exp_str)

        //表达式的car为字符的时候
        if (exp_str[0] != "(") {
            //字符串的处理
            for (let i = 0; i < exp_str.length; i++) {
                let world = exp_str[i];
                if (world == "\"") {
                    doubleFlag_lock = !doubleFlag_lock
                }

                if (!doubleFlag_lock && (world == " " || world == "(")) {
                    car_over = true
                }
                if (!car_over) {
                    car += world
                } else {
                    cdr += world
                }
            }
            cdr = this.kill_startEnd_rubbish(cdr)
            cdr = this.quoteHandle(cdr)
            return {
                car: car,
                cdr: "(" + cdr + ")" //自动增加（），即构建的是list格式
            }
        } else {
            //表达式的car为括号队的时候
            let temp = [1]
            car_over = false
            car = "("
            for (let i = 1; i < exp_str.length; i++) {
                let world = exp_str[i]
                if (world == "\"") {
                    doubleFlag_lock = !doubleFlag_lock
                }
                if (!doubleFlag_lock) {
                    if (world == "(") {
                        temp.unshift(1)
                    } else if (world == ")") (
                        temp.pop()
                    )
                }

                if (!car_over) {
                    car += world
                } else {
                    cdr += world
                }
                if (!doubleFlag_lock && (temp.length == 0 && !car_over)) {
                    car_over = true
                }

            }
            return {
                car: car,
                cdr: "(" + cdr + ")" //自动增加（），即构建的是list格式
            }
        }

    }


    static strExp_to_List(exp_str, reulst) {
       
        if (this.jude_pair(exp_str) || this.jude_quote(exp_str)) {
            if (!reulst) {
                reulst = new list()
            }
            //如果sheme代码是序队pair
            let {
                car,
                cdr
            } = this.parse_brackets(exp_str)
            testLog('***', car, "***", cdr)
            reulst.push(Parse.strExp_to_List(car))
            Parse.strExp_to_List(cdr, reulst)
            //reulst.push(Parse.strExp_to_List(cdr))
        } else {
            reulst = base.setTypeValue(exp_str)

            //exp_str = this.kill_startEnd_rubbish(exp_str)
            /* if (exp_str == "false") {
                reulst = false
            } else if (exp_str == "true") {
                reulst = true
            } else if(Number(exp_str) === 0) {
                reulst = (0)
            } else {
                reulst = (Number(exp_str) || exp_str)
            } */
        }
       
        return reulst
    }


}

export default Parse