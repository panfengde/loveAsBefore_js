import { the_null } from './aotom_constant/index.js';
import cons from './cons/index.js';
import list from './list/index.js';
import json from './json/index.js';
import frame from './frame/index.js';
import parse_txt from './parse_txt/index.js';
import Parse from './parse_exp/index.js';

function loveAsBefore() {
    let code = `
    (+ (+ 1 1) 3)

    `
    //console.log(parse_txt(code))
    parse_txt(code).forEach((code) => {
        console.log(Parse.strExp_to_List(code))
        console.log(Parse.strExp_to_List(code).show)
        //run_eval(Parse.strExp_to_List(code), global_env)
    })
}



export {
    loveAsBefore
}