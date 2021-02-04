import {
    the_null
} from './aotom_constant/index.js';
import {
    cons,
    list
} from './cons/index.js';

function loveAsBefore() {
    console.log(new list(1, new list(1, 2, 3, 4), 3, 4))
    console.log(new list(1, (new list(1, 2, 3, 4)), 3, 4))
    console.log(new list())
}

export {
    loveAsBefore
}