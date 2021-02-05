import { the_null } from './aotom_constant/index.js';
import cons from './cons/index.js';
import list from './list/index.js';
import json from './json/index.js';

function loveAsBefore() {
    let one = new cons(1, 2);
    let two = new cons(3, 4);
    let three = new cons(5, 4);
    console.log(new json(one, two, three))
}

export {
    loveAsBefore
}