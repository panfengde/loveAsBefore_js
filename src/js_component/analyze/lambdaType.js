import list from '../list/index';


// new list("compound", args, ananlyzed_body, env)
class lambdaBase {
    constructor(args, body, env) {
        this.value = "[lambda native code]"
        this.args = args;
        this.ananlyzed_body = body;
        this.define_env = env;//定义时的环境
        this.type = "lambda"
    }
    call(env) {
        return new lambdaBase(this.args, this.ananlyzed_body, env)
    }
}





export { lambdaBase }