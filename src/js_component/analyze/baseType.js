class base {
    constructor(value) {
        this.value = value
    }
    get show() {
        return this.value.show || this.value
    }

    static add(...datas) {
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

}


class _number extends base {
    constructor(props) {
        super(props)
        this.type = "number"
    }
    hello() {
        alert("hello")
    }
}


class _string extends base {
    constructor(props) {
        super(props)
        this.type = "string"
        this.value = props.replace(/^\"|\"$/g, "")
    }

}


export { base, _number, _string };