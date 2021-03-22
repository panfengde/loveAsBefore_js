var fs = require("fs");
var path = require("path");
import loveAsBeforeCompiler from './js_component/compiler.js';


//let file = ["./labCode/compiler/index.lab"];
let file = [
    "./labCode/macro/macro.lab",
    //"./labCode/baseTest/index.lab",
    "./xml2layout/parseXml/index.lab",
    './js_component/drawComponents/index.lab'
];

let CodeArrays = [];

fs.truncateSync(__dirname + "/../compilerResult/index.js", 0,)

file.forEach((filename) => {
    let data = fs.readFileSync(path.join(__dirname, filename), 'utf-8',);
    CodeArrays.push(data);
})

let targetFile = __dirname + '/../compilerResult/index.js'
loveAsBeforeCompiler(targetFile, CodeArrays)






