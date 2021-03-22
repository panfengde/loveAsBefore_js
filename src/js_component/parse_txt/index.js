function parse_txt222(txt) {
    //去掉收尾得空格和换行注释行等
    //txt = txt.replace(/\;+.*\n|\;+.*\r\n/g, "")
    //txt = txt.replace(/^\/\/+.*\r\n|^\;+.*\r\n|^\#\#+.*\r\n/g, "")

    txt = txt.replace(/^[\/\/]+.*|^\;+.*|^\#+.*/mg, "")
    txt = txt.replace(/\r\n|\n/g, " ")
    txt = txt.replace(/^\s*|\s*$|\n/g, "")
    let reult = []

    //终止
    while (txt && /\w/.test(txt)) {
        txt = iter(txt)
        //console.log(Boolean(txt))
    }
    return reult;


    function iter(txt) {
        //单引号
        //txt = txt.replace(/(^\s*\n*)|(\n*\s*$)|(\r\n)|\n/g, "")
        txt = txt.replace(/^\s*|\s*$/g, "")
        //双引号语句的处理
        if (/^\"/.test(txt)) {
            reult.push(txt.match(/^\"[^\"]*\"/)[0])
            return txt.replace(/^\"[^\"]*\"/, "")
        }
        let quote = ""
        //正则则替换'
        if (/^'/.test(txt)) {
            //console.log("___",txt)
            txt = txt.replace(/^\s*\s*'/g, "")
            quote = "'"
        }
        let temp = "";
        let flaog_array = [];
        for (let i = 0, length = txt.length; i < length; i++) {
            let word = txt[i];
            if (temp == "" || temp[0] == "(") {
                if (word == "(") {
                    flaog_array.unshift(1)
                } else if (word == ")") {
                    flaog_array.pop()
                }
                if (flaog_array.length > 0) {
                    temp += word;
                } else if (flaog_array == 0 && temp != "") {
                    reult.push(quote + temp + ")")
                    return txt.slice(i + 1)
                }
            }

            //针对变量，字符等
            if (temp == "" || (temp.length > 0 && temp[0] != "(" && temp[0] != ")")) {
                let s = legalWorld
                // console.log("*************", word, i, txt.length, txt, txt.slice(i + 1) )
                if (word == " " || word == "(") {
                    reult.push(quote + temp)
                    return txt.slice(i)
                } else if (s.test(word)) {
                    temp += word;
                }
            }

            if (i == length - 1) {
                reult.push(quote + temp)
                return false
            }
        }
    }
}

function parse_txt(txt) {
    //将代码全文，分割为一段一段的
    /**
     * 1.忽略注释行
     * 2.忽略多余的空格
     * 3.互虐换行符号
     */
    let length = txt.length;
    //S表达式语句标志 '(1 2 3) (a b)  
    let Sstart = false
    //quote表达式标志
    let quoteStart = false
    //字符串表达式
    let stringStart = false
    //其他，如数字，变量 1 "string" true等
    let otherStart = false
    //注释语句标志
    let noteStart = false
    //用来记录一个语句的
    let oneExp = "";
    //记录成对的括号用的，辅助
    let bracketsFlag = []

    let legalWorld = /[a-zA-Z0-9_']/;

    let result = []

    for (let index = 0; index < length; index++) {
        let char = txt[index];
        let nextChar = txt[index + 1];
        if (noteStart) {
            //注释标志开始了
            if (/\r\n|\n|\r/.test(char)) {
                //遇见换行符号，注释结束
                noteStart = false;
                //换行时，添加必要的空格。避免 n n 变成nn
                oneExp.length !== 0 && (oneExp += " ")
            }
            //忽略该词汇
            continue
        } else {
            //注释标志还没有开始了------------------------------
            if (!stringStart) {
                //不是处于字符串语句中时
                if (char == ";" || char == "#") {
                    noteStart = true
                    continue
                }

                if (char == "/" && nextChar == "/") {
                    noteStart = true
                    continue
                }
            }
        }

        //替换掉文中的换行符号
        if (/\r\n|\n|\r/.test(char)) {
            char = " "
        }

        if (!(Sstart || quoteStart || stringStart || otherStart)) {
            if (char == "(") {
                Sstart = true
            } else if (char == "'") {
                quoteStart = true
                oneExp = "'";
                continue
            } else if (char == "\"") {
                stringStart = true
            } else if (/\w/.test(char)) {
                otherStart = true
            }
        } else {
            //连续的空格，忽略
            if (char == " ") {
                if (oneExp.length > 1 && oneExp[oneExp.length - 1] !== " ") {
                    oneExp += " "
                }
                continue
            }
        }

        //s表达式语句和quote语句
        if (Sstart) {
            oneExp += char;
            if (char == "(") {
                bracketsFlag.push(1)
            } else if (char == ")") {
                bracketsFlag.pop()
            }
            //!S表达式中的字符串中有（）时会产生bug------------------------
            if (bracketsFlag.length == 0) {
                Sstart = false;
                result.push(oneExp)
                oneExp = ""
            }
            continue

        } else if (quoteStart) {
            if (oneExp.length > 1) {
                if (oneExp[1] == "(") {
                    oneExp += char;
                    if (char == "(") {
                        bracketsFlag.push(1)
                    } else if (char == ")") {
                        bracketsFlag.pop()
                    }
                    //!S表达式中的字符串中有（）时会产生bug------------------------
                    if (bracketsFlag.length == 0) {
                        quoteStart = false;
                        result.push(oneExp)
                        oneExp = ""
                    }
                } else {
                    oneExp += char;
                    //                console.log("------", legalWorld.test(nextChar), nextChar)
                    if (!(legalWorld.test(nextChar))) {
                        quoteStart = false;
                        result.push(oneExp)
                        oneExp = ""
                    }
                }
            } else {
                oneExp += char;
                if (char == "(") {
                    bracketsFlag.push(1)
                } else if (char == ")") {
                    bracketsFlag.pop()
                }
            }
            continue
        } else if (stringStart) {
            //独立的字符串语句
            oneExp += char;
            if (char == "\"") {
                stringStart = false;
                result.push(oneExp)
                oneExp = ""
            }
            continue
        } else if (otherStart) {
            oneExp += char;
            if (!nextChar || !(legalWorld.test(nextChar))) {
                result.push(oneExp)
                otherStart = false;
                oneExp = ""
            }

            continue
        }
    }
    if (oneExp != "") {
        result.push(oneExp)
    }

    return result
}

//parse_txt(txt)
//console.log(parse_txt(txt))
export default parse_txt