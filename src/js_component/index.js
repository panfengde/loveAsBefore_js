import parse_txt from './parse_txt/index.js';
import Parse from './parse_exp/index.js';
import global_env from './inital_env/index.js';
import run_eval from './run_eval/index.js';


function loveAsBefore(...labCodeFiles) {
    labCodeFiles.forEach((labCodes) => {
        parse_txt(labCodes).forEach((code) => {
            //console.log(code)
            //console.log(Parse.strExp_to_List(code))
            let result = run_eval(Parse.strExp_to_List(code), global_env)
            let _theshow = result ? (result.show || result.value) : result
            console.log(_theshow)
            /* try {
                JSON.parse(_theshow)
            } catch (e) {
                console.log(_theshow)
            } */

        })
    })
}



export {
    loveAsBefore
}