import parse_txt from './parse_txt/index.js';
import Parse from './parse_exp/index.js';
import global_env from './inital_env/index.js';
import run_eval from './run_eval/index.js';


function loveAsBefore(...labCodeFiles) {
    labCodeFiles.forEach((labCodes) => {
        //strExp_to_List 优化空间非常大
        parse_txt(labCodes).forEach((code) => {
            //console.log(code)
            //console.log(Parse.strExp_to_List(code))
            let result = run_eval(Parse.strExp_to_List(code), global_env)
            
            console.log(result)
            /* try {
                let _theshow = result ? (result.show || result.value) : result
                console.log(_theshow)
            } catch (e) {
                console.log(result)
            } */

        })
    })
}

function loveAsBefore__(...labCodeFiles) {
    let result = []
    console.time("解析")
    labCodeFiles.forEach((labCodes) => {
        parse_txt(labCodes).forEach((code) => {

            result.push(Parse.strExp_to_List(code))
        })
    })
    console.timeEnd("解析")
    console.time("运行")
    result.forEach((code) => {
        let result_ = run_eval(code, global_env)
        let _theshow = result_ ? (result_.show || result_.value) : result_
        console.log(_theshow)
    })
    console.timeEnd("运行")
}

export {
    loveAsBefore
}