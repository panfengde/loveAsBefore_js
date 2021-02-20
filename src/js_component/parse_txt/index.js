function parse_txt(txt) {
    //去掉收尾得空格和换行注释行等
    //txt = txt.replace(/\;+.*\n|\;+.*\r\n/g, "")
    txt = txt.replace(/\/\/+.*\n|\;+.*\r\n/g, "")
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
                let s = /[a-zA-Z0-9']/
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

export default parse_txt