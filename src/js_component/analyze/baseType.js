let string_exp_test = new RegExp(/^\"[\s\S]*\"$/g)

class base {
    constructor(value) {
        this.value = value
    }
    get show() {
        return this.value.show || this.value
    }

    static add(...datas) {
        //console.log(datas)
        //加法
        let tmep = datas[0].value;
        datas.forEach((obj, i) => {
            if (i != 0) {
                tmep += obj.value;
            }
        });
        return new _number(tmep)
    }

    static subtract(...datas) {
        let tmep = datas[0].value;
        datas.forEach((obj, i) => {
            if (i != 0) {
                tmep -= obj.value;
            }
        });
        return new _number(tmep)
    }

    static multiplication(...datas) {
        let tmep = datas[0].value;
        datas.forEach((obj, i) => {
            if (i != 0) {
                tmep *= obj.value;
            }
        });
        return new _number(tmep)
    }

    static division(...datas) {
        let tmep = datas[0].value;
        datas.forEach((obj, i) => {
            if (i != 0) {
                tmep /= obj.value;
            }
        });
        return new _number(tmep)
    }

    static equal(a, b) {
        return a.value === b.value
    }

    static setTypeValue(valueString) {
        if (valueString === "false") {
            return new _boolean(false)
        } else if (valueString === "true" || valueString === "else") {
            return new _boolean(true)
        } else if (!isNaN(Number(valueString))) {
            return new _number(valueString)
        } else if (string_exp_test.test(valueString)) {
            return new _string(valueString.replace(/^\"|\"$/g, ""))
        } else {
            return valueString
            //throw SyntaxError("基础类型错误,检查parse_Exp")
        }
    }
}



class _number extends base {
    constructor(props) {
        super(props)
        this.type = "number"
        this.value = Number(props)
    }
    hello() {
        alert("hello")
    }
}


class _string extends base {
    constructor(props) {
        super(props)
        this.type = "string"
        this.value = props
    }
}


class _boolean extends base {
    constructor(props) {
        super(props)
        this.type = "boolean"
        this.value = Boolean(props)
    }
}





export { base, _number, _string, _boolean };