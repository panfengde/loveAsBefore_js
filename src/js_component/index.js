import { the_null } from './aotom_constant/index.js';
import cons from './cons/index.js';
import list from './list/index.js';
import json from './json/index.js';
import frame from './frame/index.js';
import parse_txt from './parse_txt/index.js';
import Parse from './parse_exp/index.js';
import global_env from './inital_env/index.js';
import run_eval from './run_eval/index.js';



function loveAsBefore(...labCodeFiles) {
    labCodeFiles.forEach((labCodes) => {
        parse_txt(labCodes).forEach((code) => {
            let result = run_eval(Parse.strExp_to_List(code), global_env)
            console.log(result)
            //console.log(result.show || result.value || result)
        })
    })

}



export {
    loveAsBefore
}