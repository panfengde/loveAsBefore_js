import { the_null } from '../aotom_constant'
import { judge_arr_exist } from "../../utils/tools"

class cons {
    constructor(car, cdr) {
        if (arguments.length != 2) {
            throw SyntaxError("cons的参数必须是2个")
        }
        car && (this.car = car);
        cdr && (this.cdr = cdr);
        this.type = "cons"
    }

    set_car(car) {
        this.car = car
    }

    set_cdr(cdr) {
        this.cdr = cdr
    }

    get show() {
        return `( ${this.car} . ${this.cdr} )`;
    }
}







export default cons
