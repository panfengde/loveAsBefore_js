import { the_null } from '../aotom_constant'
import { judge_arr_exist } from "../../utils/tools"

class cons {
    constructor(car, cdr) {
        if (arguments.length != 2) {
            throw SyntaxError("cons的参数必须是2个")
        }
        typeof car != "undefined" && (this.car = car);
        typeof cdr != "undefined" && (this.cdr = cdr);
        this.type = "cons"
    }

    set_car(car) {
        this.car = car
    }

    set_cdr(cdr) {
        this.cdr = cdr
    }

    get show() {
        return `( ${this.car instanceof Object ? this.car.show : this.car} : ${this.cdr instanceof Object ? this.cdr.show : this.cdr} )`;
    }
}







export default cons
